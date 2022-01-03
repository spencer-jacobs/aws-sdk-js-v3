import { HashConstructor, StreamHasher } from "@aws-sdk/types";
import { createReadStream, ReadStream } from "fs";
import { Readable } from "stream";

import { HashCalculator } from "./HashCalculator";

export const fileStreamHasher: StreamHasher<Readable> = (hashCtor: HashConstructor, fileStream: Readable) =>
  new Promise((resolve, reject) => {
    if (!isReadStream(fileStream)) {
      reject(new Error("Unable to calculate hash for non-file streams."));
      return;
    }

    const fileStreamTee = createReadStream(fileStream.path, {
      start: (fileStream as any).start,
      end: (fileStream as any).end,
    });

    const hash = new hashCtor();
    const hashCalculator = new HashCalculator(hash);

    fileStreamTee.pipe(hashCalculator);
    fileStreamTee.on("error", (err: any) => {
      // if the source errors, the destination stream needs to manually end
      hashCalculator.end();
      reject(err);
    });
    hashCalculator.on("error", reject);
    hashCalculator.on("finish", function (this: HashCalculator) {
      hash.digest().then(resolve).catch(reject);
    });
  });

const isReadStream = (stream: Readable): stream is ReadStream => typeof (stream as ReadStream).path === "string";
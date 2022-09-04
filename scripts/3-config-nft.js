import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x53461531242DEEC0f128902a6762fA3343059871");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Kaizoku-Ō",
        description: "This NFT will give you access to OnePieceDAO!",
        image: readFileSync("scripts/assets/luffy.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
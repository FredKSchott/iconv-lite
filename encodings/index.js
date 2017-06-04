"use strict";

// Update this array if you add/rename/remove files in this directory.
// We support Browserify by skipping automatic module discovery and requiring modules directly.
import internal from "./internal";
import utf16 from "./utf16";
import utf7 from "./utf7";
import sbcsCodec from "./sbcs-codec";
import sbcsData from "./sbcs-data";
import sbcsDataGenerated from "./sbcs-data-generated";
import dbcsCodec from "./dbcs-codec";
import dbcsData from "./dbcs-data";

export default Object.assign(
    {},
    internal,
    utf16,
    utf7,
    sbcsCodec,
    sbcsData,
    sbcsDataGenerated,
    dbcsCodec,
    dbcsData
);
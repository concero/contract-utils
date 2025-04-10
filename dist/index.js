var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// node_modules/viem/_esm/errors/version.js
var version = "2.26.2";

// node_modules/viem/_esm/errors/base.js
function walk(err, fn) {
  if (fn?.(err))
    return err;
  if (err && typeof err === "object" && "cause" in err && err.cause !== undefined)
    return walk(err.cause, fn);
  return fn ? null : err;
}
var errorConfig, BaseError;
var init_base = __esm(() => {
  errorConfig = {
    getDocsUrl: ({ docsBaseUrl, docsPath = "", docsSlug }) => docsPath ? `${docsBaseUrl ?? "https://viem.sh"}${docsPath}${docsSlug ? `#${docsSlug}` : ""}` : undefined,
    version: `viem@${version}`
  };
  BaseError = class BaseError extends Error {
    constructor(shortMessage, args = {}) {
      const details = (() => {
        if (args.cause instanceof BaseError)
          return args.cause.details;
        if (args.cause?.message)
          return args.cause.message;
        return args.details;
      })();
      const docsPath = (() => {
        if (args.cause instanceof BaseError)
          return args.cause.docsPath || args.docsPath;
        return args.docsPath;
      })();
      const docsUrl = errorConfig.getDocsUrl?.({ ...args, docsPath });
      const message = [
        shortMessage || "An error occurred.",
        "",
        ...args.metaMessages ? [...args.metaMessages, ""] : [],
        ...docsUrl ? [`Docs: ${docsUrl}`] : [],
        ...details ? [`Details: ${details}`] : [],
        ...errorConfig.version ? [`Version: ${errorConfig.version}`] : []
      ].join(`
`);
      super(message, args.cause ? { cause: args.cause } : undefined);
      Object.defineProperty(this, "details", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: undefined
      });
      Object.defineProperty(this, "docsPath", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: undefined
      });
      Object.defineProperty(this, "metaMessages", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: undefined
      });
      Object.defineProperty(this, "shortMessage", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: undefined
      });
      Object.defineProperty(this, "version", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: undefined
      });
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "BaseError"
      });
      this.details = details;
      this.docsPath = docsPath;
      this.metaMessages = args.metaMessages;
      this.name = args.name ?? this.name;
      this.shortMessage = shortMessage;
      this.version = version;
    }
    walk(fn) {
      return walk(this, fn);
    }
  };
});

// node_modules/viem/_esm/errors/encoding.js
var IntegerOutOfRangeError, SizeOverflowError;
var init_encoding = __esm(() => {
  init_base();
  IntegerOutOfRangeError = class IntegerOutOfRangeError extends BaseError {
    constructor({ max, min, signed, size, value }) {
      super(`Number "${value}" is not in safe ${size ? `${size * 8}-bit ${signed ? "signed" : "unsigned"} ` : ""}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`, { name: "IntegerOutOfRangeError" });
    }
  };
  SizeOverflowError = class SizeOverflowError extends BaseError {
    constructor({ givenSize, maxSize }) {
      super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, { name: "SizeOverflowError" });
    }
  };
});

// node_modules/viem/_esm/utils/data/isHex.js
function isHex(value, { strict = true } = {}) {
  if (!value)
    return false;
  if (typeof value !== "string")
    return false;
  return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith("0x");
}

// node_modules/viem/_esm/utils/data/size.js
function size(value) {
  if (isHex(value, { strict: false }))
    return Math.ceil((value.length - 2) / 2);
  return value.length;
}
var init_size = () => {
};

// node_modules/viem/_esm/utils/data/trim.js
function trim(hexOrBytes, { dir = "left" } = {}) {
  let data = typeof hexOrBytes === "string" ? hexOrBytes.replace("0x", "") : hexOrBytes;
  let sliceLength = 0;
  for (let i = 0;i < data.length - 1; i++) {
    if (data[dir === "left" ? i : data.length - i - 1].toString() === "0")
      sliceLength++;
    else
      break;
  }
  data = dir === "left" ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
  if (typeof hexOrBytes === "string") {
    if (data.length === 1 && dir === "right")
      data = `${data}0`;
    return `0x${data.length % 2 === 1 ? `0${data}` : data}`;
  }
  return data;
}

// node_modules/viem/_esm/errors/data.js
var SliceOffsetOutOfBoundsError, SizeExceedsPaddingSizeError;
var init_data = __esm(() => {
  init_base();
  SliceOffsetOutOfBoundsError = class SliceOffsetOutOfBoundsError extends BaseError {
    constructor({ offset, position, size: size2 }) {
      super(`Slice ${position === "start" ? "starting" : "ending"} at offset "${offset}" is out-of-bounds (size: ${size2}).`, { name: "SliceOffsetOutOfBoundsError" });
    }
  };
  SizeExceedsPaddingSizeError = class SizeExceedsPaddingSizeError extends BaseError {
    constructor({ size: size2, targetSize, type }) {
      super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size2}) exceeds padding size (${targetSize}).`, { name: "SizeExceedsPaddingSizeError" });
    }
  };
});

// node_modules/viem/_esm/utils/data/pad.js
function pad(hexOrBytes, { dir, size: size2 = 32 } = {}) {
  if (typeof hexOrBytes === "string")
    return padHex(hexOrBytes, { dir, size: size2 });
  return padBytes(hexOrBytes, { dir, size: size2 });
}
function padHex(hex_, { dir, size: size2 = 32 } = {}) {
  if (size2 === null)
    return hex_;
  const hex = hex_.replace("0x", "");
  if (hex.length > size2 * 2)
    throw new SizeExceedsPaddingSizeError({
      size: Math.ceil(hex.length / 2),
      targetSize: size2,
      type: "hex"
    });
  return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size2 * 2, "0")}`;
}
function padBytes(bytes, { dir, size: size2 = 32 } = {}) {
  if (size2 === null)
    return bytes;
  if (bytes.length > size2)
    throw new SizeExceedsPaddingSizeError({
      size: bytes.length,
      targetSize: size2,
      type: "bytes"
    });
  const paddedBytes = new Uint8Array(size2);
  for (let i = 0;i < size2; i++) {
    const padEnd = dir === "right";
    paddedBytes[padEnd ? i : size2 - i - 1] = bytes[padEnd ? i : bytes.length - i - 1];
  }
  return paddedBytes;
}
var init_pad = __esm(() => {
  init_data();
});

// node_modules/viem/_esm/utils/encoding/toHex.js
function toHex(value, opts = {}) {
  if (typeof value === "number" || typeof value === "bigint")
    return numberToHex(value, opts);
  if (typeof value === "string") {
    return stringToHex(value, opts);
  }
  if (typeof value === "boolean")
    return boolToHex(value, opts);
  return bytesToHex(value, opts);
}
function boolToHex(value, opts = {}) {
  const hex = `0x${Number(value)}`;
  if (typeof opts.size === "number") {
    assertSize(hex, { size: opts.size });
    return pad(hex, { size: opts.size });
  }
  return hex;
}
function bytesToHex(value, opts = {}) {
  let string = "";
  for (let i = 0;i < value.length; i++) {
    string += hexes[value[i]];
  }
  const hex = `0x${string}`;
  if (typeof opts.size === "number") {
    assertSize(hex, { size: opts.size });
    return pad(hex, { dir: "right", size: opts.size });
  }
  return hex;
}
function numberToHex(value_, opts = {}) {
  const { signed, size: size2 } = opts;
  const value = BigInt(value_);
  let maxValue;
  if (size2) {
    if (signed)
      maxValue = (1n << BigInt(size2) * 8n - 1n) - 1n;
    else
      maxValue = 2n ** (BigInt(size2) * 8n) - 1n;
  } else if (typeof value_ === "number") {
    maxValue = BigInt(Number.MAX_SAFE_INTEGER);
  }
  const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
  if (maxValue && value > maxValue || value < minValue) {
    const suffix = typeof value_ === "bigint" ? "n" : "";
    throw new IntegerOutOfRangeError({
      max: maxValue ? `${maxValue}${suffix}` : undefined,
      min: `${minValue}${suffix}`,
      signed,
      size: size2,
      value: `${value_}${suffix}`
    });
  }
  const hex = `0x${(signed && value < 0 ? (1n << BigInt(size2 * 8)) + BigInt(value) : value).toString(16)}`;
  if (size2)
    return pad(hex, { size: size2 });
  return hex;
}
function stringToHex(value_, opts = {}) {
  const value = encoder.encode(value_);
  return bytesToHex(value, opts);
}
var hexes, encoder;
var init_toHex = __esm(() => {
  init_encoding();
  init_pad();
  init_fromHex();
  hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_v, i) => i.toString(16).padStart(2, "0"));
  encoder = /* @__PURE__ */ new TextEncoder;
});

// node_modules/viem/_esm/utils/encoding/toBytes.js
function toBytes(value, opts = {}) {
  if (typeof value === "number" || typeof value === "bigint")
    return numberToBytes(value, opts);
  if (typeof value === "boolean")
    return boolToBytes(value, opts);
  if (isHex(value))
    return hexToBytes(value, opts);
  return stringToBytes(value, opts);
}
function boolToBytes(value, opts = {}) {
  const bytes = new Uint8Array(1);
  bytes[0] = Number(value);
  if (typeof opts.size === "number") {
    assertSize(bytes, { size: opts.size });
    return pad(bytes, { size: opts.size });
  }
  return bytes;
}
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine)
    return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F)
    return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f)
    return char - (charCodeMap.a - 10);
  return;
}
function hexToBytes(hex_, opts = {}) {
  let hex = hex_;
  if (opts.size) {
    assertSize(hex, { size: opts.size });
    hex = pad(hex, { dir: "right", size: opts.size });
  }
  let hexString = hex.slice(2);
  if (hexString.length % 2)
    hexString = `0${hexString}`;
  const length = hexString.length / 2;
  const bytes = new Uint8Array(length);
  for (let index = 0, j = 0;index < length; index++) {
    const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j++));
    const nibbleRight = charCodeToBase16(hexString.charCodeAt(j++));
    if (nibbleLeft === undefined || nibbleRight === undefined) {
      throw new BaseError(`Invalid byte sequence ("${hexString[j - 2]}${hexString[j - 1]}" in "${hexString}").`);
    }
    bytes[index] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes;
}
function numberToBytes(value, opts) {
  const hex = numberToHex(value, opts);
  return hexToBytes(hex);
}
function stringToBytes(value, opts = {}) {
  const bytes = encoder2.encode(value);
  if (typeof opts.size === "number") {
    assertSize(bytes, { size: opts.size });
    return pad(bytes, { dir: "right", size: opts.size });
  }
  return bytes;
}
var encoder2, charCodeMap;
var init_toBytes = __esm(() => {
  init_base();
  init_pad();
  init_fromHex();
  init_toHex();
  encoder2 = /* @__PURE__ */ new TextEncoder;
  charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
});

// node_modules/viem/_esm/utils/encoding/fromHex.js
function assertSize(hexOrBytes, { size: size2 }) {
  if (size(hexOrBytes) > size2)
    throw new SizeOverflowError({
      givenSize: size(hexOrBytes),
      maxSize: size2
    });
}
function hexToBigInt(hex, opts = {}) {
  const { signed } = opts;
  if (opts.size)
    assertSize(hex, { size: opts.size });
  const value = BigInt(hex);
  if (!signed)
    return value;
  const size2 = (hex.length - 2) / 2;
  const max = (1n << BigInt(size2) * 8n - 1n) - 1n;
  if (value <= max)
    return value;
  return value - BigInt(`0x${"f".padStart(size2 * 2, "f")}`) - 1n;
}
function hexToNumber(hex, opts = {}) {
  return Number(hexToBigInt(hex, opts));
}
var init_fromHex = __esm(() => {
  init_encoding();
  init_size();
});

// node_modules/viem/_esm/utils/formatters/formatter.js
function defineFormatter(type, format) {
  return ({ exclude, format: overrides }) => {
    return {
      exclude,
      format: (args) => {
        const formatted = format(args);
        if (exclude) {
          for (const key of exclude) {
            delete formatted[key];
          }
        }
        return {
          ...formatted,
          ...overrides(args)
        };
      },
      type
    };
  };
}

// node_modules/viem/_esm/utils/formatters/transactionRequest.js
function formatTransactionRequest(request) {
  const rpcRequest = {};
  if (typeof request.authorizationList !== "undefined")
    rpcRequest.authorizationList = formatAuthorizationList2(request.authorizationList);
  if (typeof request.accessList !== "undefined")
    rpcRequest.accessList = request.accessList;
  if (typeof request.blobVersionedHashes !== "undefined")
    rpcRequest.blobVersionedHashes = request.blobVersionedHashes;
  if (typeof request.blobs !== "undefined") {
    if (typeof request.blobs[0] !== "string")
      rpcRequest.blobs = request.blobs.map((x) => bytesToHex(x));
    else
      rpcRequest.blobs = request.blobs;
  }
  if (typeof request.data !== "undefined")
    rpcRequest.data = request.data;
  if (typeof request.from !== "undefined")
    rpcRequest.from = request.from;
  if (typeof request.gas !== "undefined")
    rpcRequest.gas = numberToHex(request.gas);
  if (typeof request.gasPrice !== "undefined")
    rpcRequest.gasPrice = numberToHex(request.gasPrice);
  if (typeof request.maxFeePerBlobGas !== "undefined")
    rpcRequest.maxFeePerBlobGas = numberToHex(request.maxFeePerBlobGas);
  if (typeof request.maxFeePerGas !== "undefined")
    rpcRequest.maxFeePerGas = numberToHex(request.maxFeePerGas);
  if (typeof request.maxPriorityFeePerGas !== "undefined")
    rpcRequest.maxPriorityFeePerGas = numberToHex(request.maxPriorityFeePerGas);
  if (typeof request.nonce !== "undefined")
    rpcRequest.nonce = numberToHex(request.nonce);
  if (typeof request.to !== "undefined")
    rpcRequest.to = request.to;
  if (typeof request.type !== "undefined")
    rpcRequest.type = rpcTransactionType[request.type];
  if (typeof request.value !== "undefined")
    rpcRequest.value = numberToHex(request.value);
  return rpcRequest;
}
function formatAuthorizationList2(authorizationList) {
  return authorizationList.map((authorization) => ({
    address: authorization.address,
    r: authorization.r ? numberToHex(BigInt(authorization.r)) : authorization.r,
    s: authorization.s ? numberToHex(BigInt(authorization.s)) : authorization.s,
    chainId: numberToHex(authorization.chainId),
    nonce: numberToHex(authorization.nonce),
    ...typeof authorization.yParity !== "undefined" ? { yParity: numberToHex(authorization.yParity) } : {},
    ...typeof authorization.v !== "undefined" && typeof authorization.yParity === "undefined" ? { v: numberToHex(authorization.v) } : {}
  }));
}
var rpcTransactionType, defineTransactionRequest;
var init_transactionRequest = __esm(() => {
  init_toHex();
  rpcTransactionType = {
    legacy: "0x0",
    eip2930: "0x1",
    eip1559: "0x2",
    eip4844: "0x3",
    eip7702: "0x4"
  };
  defineTransactionRequest = /* @__PURE__ */ defineFormatter("transactionRequest", formatTransactionRequest);
});

// node_modules/viem/_esm/constants/number.js
var maxInt8, maxInt16, maxInt24, maxInt32, maxInt40, maxInt48, maxInt56, maxInt64, maxInt72, maxInt80, maxInt88, maxInt96, maxInt104, maxInt112, maxInt120, maxInt128, maxInt136, maxInt144, maxInt152, maxInt160, maxInt168, maxInt176, maxInt184, maxInt192, maxInt200, maxInt208, maxInt216, maxInt224, maxInt232, maxInt240, maxInt248, maxInt256, minInt8, minInt16, minInt24, minInt32, minInt40, minInt48, minInt56, minInt64, minInt72, minInt80, minInt88, minInt96, minInt104, minInt112, minInt120, minInt128, minInt136, minInt144, minInt152, minInt160, minInt168, minInt176, minInt184, minInt192, minInt200, minInt208, minInt216, minInt224, minInt232, minInt240, minInt248, minInt256, maxUint8, maxUint16, maxUint24, maxUint32, maxUint40, maxUint48, maxUint56, maxUint64, maxUint72, maxUint80, maxUint88, maxUint96, maxUint104, maxUint112, maxUint120, maxUint128, maxUint136, maxUint144, maxUint152, maxUint160, maxUint168, maxUint176, maxUint184, maxUint192, maxUint200, maxUint208, maxUint216, maxUint224, maxUint232, maxUint240, maxUint248, maxUint256;
var init_number = __esm(() => {
  maxInt8 = 2n ** (8n - 1n) - 1n;
  maxInt16 = 2n ** (16n - 1n) - 1n;
  maxInt24 = 2n ** (24n - 1n) - 1n;
  maxInt32 = 2n ** (32n - 1n) - 1n;
  maxInt40 = 2n ** (40n - 1n) - 1n;
  maxInt48 = 2n ** (48n - 1n) - 1n;
  maxInt56 = 2n ** (56n - 1n) - 1n;
  maxInt64 = 2n ** (64n - 1n) - 1n;
  maxInt72 = 2n ** (72n - 1n) - 1n;
  maxInt80 = 2n ** (80n - 1n) - 1n;
  maxInt88 = 2n ** (88n - 1n) - 1n;
  maxInt96 = 2n ** (96n - 1n) - 1n;
  maxInt104 = 2n ** (104n - 1n) - 1n;
  maxInt112 = 2n ** (112n - 1n) - 1n;
  maxInt120 = 2n ** (120n - 1n) - 1n;
  maxInt128 = 2n ** (128n - 1n) - 1n;
  maxInt136 = 2n ** (136n - 1n) - 1n;
  maxInt144 = 2n ** (144n - 1n) - 1n;
  maxInt152 = 2n ** (152n - 1n) - 1n;
  maxInt160 = 2n ** (160n - 1n) - 1n;
  maxInt168 = 2n ** (168n - 1n) - 1n;
  maxInt176 = 2n ** (176n - 1n) - 1n;
  maxInt184 = 2n ** (184n - 1n) - 1n;
  maxInt192 = 2n ** (192n - 1n) - 1n;
  maxInt200 = 2n ** (200n - 1n) - 1n;
  maxInt208 = 2n ** (208n - 1n) - 1n;
  maxInt216 = 2n ** (216n - 1n) - 1n;
  maxInt224 = 2n ** (224n - 1n) - 1n;
  maxInt232 = 2n ** (232n - 1n) - 1n;
  maxInt240 = 2n ** (240n - 1n) - 1n;
  maxInt248 = 2n ** (248n - 1n) - 1n;
  maxInt256 = 2n ** (256n - 1n) - 1n;
  minInt8 = -(2n ** (8n - 1n));
  minInt16 = -(2n ** (16n - 1n));
  minInt24 = -(2n ** (24n - 1n));
  minInt32 = -(2n ** (32n - 1n));
  minInt40 = -(2n ** (40n - 1n));
  minInt48 = -(2n ** (48n - 1n));
  minInt56 = -(2n ** (56n - 1n));
  minInt64 = -(2n ** (64n - 1n));
  minInt72 = -(2n ** (72n - 1n));
  minInt80 = -(2n ** (80n - 1n));
  minInt88 = -(2n ** (88n - 1n));
  minInt96 = -(2n ** (96n - 1n));
  minInt104 = -(2n ** (104n - 1n));
  minInt112 = -(2n ** (112n - 1n));
  minInt120 = -(2n ** (120n - 1n));
  minInt128 = -(2n ** (128n - 1n));
  minInt136 = -(2n ** (136n - 1n));
  minInt144 = -(2n ** (144n - 1n));
  minInt152 = -(2n ** (152n - 1n));
  minInt160 = -(2n ** (160n - 1n));
  minInt168 = -(2n ** (168n - 1n));
  minInt176 = -(2n ** (176n - 1n));
  minInt184 = -(2n ** (184n - 1n));
  minInt192 = -(2n ** (192n - 1n));
  minInt200 = -(2n ** (200n - 1n));
  minInt208 = -(2n ** (208n - 1n));
  minInt216 = -(2n ** (216n - 1n));
  minInt224 = -(2n ** (224n - 1n));
  minInt232 = -(2n ** (232n - 1n));
  minInt240 = -(2n ** (240n - 1n));
  minInt248 = -(2n ** (248n - 1n));
  minInt256 = -(2n ** (256n - 1n));
  maxUint8 = 2n ** 8n - 1n;
  maxUint16 = 2n ** 16n - 1n;
  maxUint24 = 2n ** 24n - 1n;
  maxUint32 = 2n ** 32n - 1n;
  maxUint40 = 2n ** 40n - 1n;
  maxUint48 = 2n ** 48n - 1n;
  maxUint56 = 2n ** 56n - 1n;
  maxUint64 = 2n ** 64n - 1n;
  maxUint72 = 2n ** 72n - 1n;
  maxUint80 = 2n ** 80n - 1n;
  maxUint88 = 2n ** 88n - 1n;
  maxUint96 = 2n ** 96n - 1n;
  maxUint104 = 2n ** 104n - 1n;
  maxUint112 = 2n ** 112n - 1n;
  maxUint120 = 2n ** 120n - 1n;
  maxUint128 = 2n ** 128n - 1n;
  maxUint136 = 2n ** 136n - 1n;
  maxUint144 = 2n ** 144n - 1n;
  maxUint152 = 2n ** 152n - 1n;
  maxUint160 = 2n ** 160n - 1n;
  maxUint168 = 2n ** 168n - 1n;
  maxUint176 = 2n ** 176n - 1n;
  maxUint184 = 2n ** 184n - 1n;
  maxUint192 = 2n ** 192n - 1n;
  maxUint200 = 2n ** 200n - 1n;
  maxUint208 = 2n ** 208n - 1n;
  maxUint216 = 2n ** 216n - 1n;
  maxUint224 = 2n ** 224n - 1n;
  maxUint232 = 2n ** 232n - 1n;
  maxUint240 = 2n ** 240n - 1n;
  maxUint248 = 2n ** 248n - 1n;
  maxUint256 = 2n ** 256n - 1n;
});

// node_modules/viem/_esm/utils/data/concat.js
function concatHex(values) {
  return `0x${values.reduce((acc, x) => acc + x.replace("0x", ""), "")}`;
}

// node_modules/viem/_esm/errors/cursor.js
var NegativeOffsetError, PositionOutOfBoundsError, RecursiveReadLimitExceededError;
var init_cursor = __esm(() => {
  init_base();
  NegativeOffsetError = class NegativeOffsetError extends BaseError {
    constructor({ offset }) {
      super(`Offset \`${offset}\` cannot be negative.`, {
        name: "NegativeOffsetError"
      });
    }
  };
  PositionOutOfBoundsError = class PositionOutOfBoundsError extends BaseError {
    constructor({ length, position }) {
      super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`, { name: "PositionOutOfBoundsError" });
    }
  };
  RecursiveReadLimitExceededError = class RecursiveReadLimitExceededError extends BaseError {
    constructor({ count, limit }) {
      super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`, { name: "RecursiveReadLimitExceededError" });
    }
  };
});

// node_modules/viem/_esm/utils/cursor.js
function createCursor(bytes, { recursiveReadLimit = 8192 } = {}) {
  const cursor = Object.create(staticCursor);
  cursor.bytes = bytes;
  cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  cursor.positionReadCount = new Map;
  cursor.recursiveReadLimit = recursiveReadLimit;
  return cursor;
}
var staticCursor;
var init_cursor2 = __esm(() => {
  init_cursor();
  staticCursor = {
    bytes: new Uint8Array,
    dataView: new DataView(new ArrayBuffer(0)),
    position: 0,
    positionReadCount: new Map,
    recursiveReadCount: 0,
    recursiveReadLimit: Number.POSITIVE_INFINITY,
    assertReadLimit() {
      if (this.recursiveReadCount >= this.recursiveReadLimit)
        throw new RecursiveReadLimitExceededError({
          count: this.recursiveReadCount + 1,
          limit: this.recursiveReadLimit
        });
    },
    assertPosition(position) {
      if (position < 0 || position > this.bytes.length - 1)
        throw new PositionOutOfBoundsError({
          length: this.bytes.length,
          position
        });
    },
    decrementPosition(offset) {
      if (offset < 0)
        throw new NegativeOffsetError({ offset });
      const position = this.position - offset;
      this.assertPosition(position);
      this.position = position;
    },
    getReadCount(position) {
      return this.positionReadCount.get(position || this.position) || 0;
    },
    incrementPosition(offset) {
      if (offset < 0)
        throw new NegativeOffsetError({ offset });
      const position = this.position + offset;
      this.assertPosition(position);
      this.position = position;
    },
    inspectByte(position_) {
      const position = position_ ?? this.position;
      this.assertPosition(position);
      return this.bytes[position];
    },
    inspectBytes(length, position_) {
      const position = position_ ?? this.position;
      this.assertPosition(position + length - 1);
      return this.bytes.subarray(position, position + length);
    },
    inspectUint8(position_) {
      const position = position_ ?? this.position;
      this.assertPosition(position);
      return this.bytes[position];
    },
    inspectUint16(position_) {
      const position = position_ ?? this.position;
      this.assertPosition(position + 1);
      return this.dataView.getUint16(position);
    },
    inspectUint24(position_) {
      const position = position_ ?? this.position;
      this.assertPosition(position + 2);
      return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
    },
    inspectUint32(position_) {
      const position = position_ ?? this.position;
      this.assertPosition(position + 3);
      return this.dataView.getUint32(position);
    },
    pushByte(byte) {
      this.assertPosition(this.position);
      this.bytes[this.position] = byte;
      this.position++;
    },
    pushBytes(bytes) {
      this.assertPosition(this.position + bytes.length - 1);
      this.bytes.set(bytes, this.position);
      this.position += bytes.length;
    },
    pushUint8(value) {
      this.assertPosition(this.position);
      this.bytes[this.position] = value;
      this.position++;
    },
    pushUint16(value) {
      this.assertPosition(this.position + 1);
      this.dataView.setUint16(this.position, value);
      this.position += 2;
    },
    pushUint24(value) {
      this.assertPosition(this.position + 2);
      this.dataView.setUint16(this.position, value >> 8);
      this.dataView.setUint8(this.position + 2, value & ~4294967040);
      this.position += 3;
    },
    pushUint32(value) {
      this.assertPosition(this.position + 3);
      this.dataView.setUint32(this.position, value);
      this.position += 4;
    },
    readByte() {
      this.assertReadLimit();
      this._touch();
      const value = this.inspectByte();
      this.position++;
      return value;
    },
    readBytes(length, size2) {
      this.assertReadLimit();
      this._touch();
      const value = this.inspectBytes(length);
      this.position += size2 ?? length;
      return value;
    },
    readUint8() {
      this.assertReadLimit();
      this._touch();
      const value = this.inspectUint8();
      this.position += 1;
      return value;
    },
    readUint16() {
      this.assertReadLimit();
      this._touch();
      const value = this.inspectUint16();
      this.position += 2;
      return value;
    },
    readUint24() {
      this.assertReadLimit();
      this._touch();
      const value = this.inspectUint24();
      this.position += 3;
      return value;
    },
    readUint32() {
      this.assertReadLimit();
      this._touch();
      const value = this.inspectUint32();
      this.position += 4;
      return value;
    },
    get remaining() {
      return this.bytes.length - this.position;
    },
    setPosition(position) {
      const oldPosition = this.position;
      this.assertPosition(position);
      this.position = position;
      return () => this.position = oldPosition;
    },
    _touch() {
      if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
        return;
      const count = this.getReadCount();
      this.positionReadCount.set(this.position, count + 1);
      if (count > 0)
        this.recursiveReadCount++;
    }
  };
});

// node_modules/viem/_esm/constants/unit.js
var etherUnits, gweiUnits;
var init_unit = __esm(() => {
  etherUnits = {
    gwei: 9,
    wei: 18
  };
  gweiUnits = {
    ether: -9,
    wei: 9
  };
});

// node_modules/viem/_esm/utils/unit/formatUnits.js
function formatUnits(value, decimals) {
  let display = value.toString();
  const negative = display.startsWith("-");
  if (negative)
    display = display.slice(1);
  display = display.padStart(decimals, "0");
  let [integer, fraction] = [
    display.slice(0, display.length - decimals),
    display.slice(display.length - decimals)
  ];
  fraction = fraction.replace(/(0+)$/, "");
  return `${negative ? "-" : ""}${integer || "0"}${fraction ? `.${fraction}` : ""}`;
}

// node_modules/viem/_esm/utils/unit/formatEther.js
function formatEther(wei, unit = "wei") {
  return formatUnits(wei, etherUnits[unit]);
}
var init_formatEther = __esm(() => {
  init_unit();
});

// node_modules/viem/_esm/utils/unit/formatGwei.js
function formatGwei(wei, unit = "wei") {
  return formatUnits(wei, gweiUnits[unit]);
}
var init_formatGwei = __esm(() => {
  init_unit();
});

// node_modules/viem/_esm/errors/transaction.js
function prettyPrint(args) {
  const entries = Object.entries(args).map(([key, value]) => {
    if (value === undefined || value === false)
      return null;
    return [key, value];
  }).filter(Boolean);
  const maxLength = entries.reduce((acc, [key]) => Math.max(acc, key.length), 0);
  return entries.map(([key, value]) => `  ${`${key}:`.padEnd(maxLength + 1)}  ${value}`).join(`
`);
}
var FeeConflictError, InvalidLegacyVError, InvalidSerializableTransactionError, InvalidStorageKeySizeError;
var init_transaction = __esm(() => {
  init_base();
  FeeConflictError = class FeeConflictError extends BaseError {
    constructor() {
      super([
        "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.",
        "Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."
      ].join(`
`), { name: "FeeConflictError" });
    }
  };
  InvalidLegacyVError = class InvalidLegacyVError extends BaseError {
    constructor({ v }) {
      super(`Invalid \`v\` value "${v}". Expected 27 or 28.`, {
        name: "InvalidLegacyVError"
      });
    }
  };
  InvalidSerializableTransactionError = class InvalidSerializableTransactionError extends BaseError {
    constructor({ transaction }) {
      super("Cannot infer a transaction type from provided transaction.", {
        metaMessages: [
          "Provided Transaction:",
          "{",
          prettyPrint(transaction),
          "}",
          "",
          "To infer the type, either provide:",
          "- a `type` to the Transaction, or",
          "- an EIP-1559 Transaction with `maxFeePerGas`, or",
          "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
          "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
          "- an EIP-7702 Transaction with `authorizationList`, or",
          "- a Legacy Transaction with `gasPrice`"
        ],
        name: "InvalidSerializableTransactionError"
      });
    }
  };
  InvalidStorageKeySizeError = class InvalidStorageKeySizeError extends BaseError {
    constructor({ storageKey }) {
      super(`Size for storage key "${storageKey}" is invalid. Expected 32 bytes. Got ${Math.floor((storageKey.length - 2) / 2)} bytes.`, { name: "InvalidStorageKeySizeError" });
    }
  };
});

// node_modules/@noble/hashes/esm/_assert.js
function anumber(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error("positive integer expected, got " + n);
}
function isBytes(a) {
  return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function abytes(b, ...lengths) {
  if (!isBytes(b))
    throw new Error("Uint8Array expected");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
}
function aexists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function aoutput(out, instance) {
  abytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error("digestInto() expects output buffer of length at least " + min);
  }
}
var init__assert = () => {
};

// node_modules/@noble/hashes/esm/utils.js
function u32(arr) {
  return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function createView(arr) {
  return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
  return word << 32 - shift | word >>> shift;
}
function byteSwap(word) {
  return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
}
function byteSwap32(arr) {
  for (let i = 0;i < arr.length; i++) {
    arr[i] = byteSwap(arr[i]);
  }
}
function utf8ToBytes(str) {
  if (typeof str !== "string")
    throw new Error("utf8ToBytes expected string, got " + typeof str);
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes2(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  abytes(data);
  return data;
}

class Hash {
  clone() {
    return this._cloneInto();
  }
}
function wrapConstructor(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes2(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
  const hashC = (msg, opts) => hashCons(opts).update(toBytes2(msg)).digest();
  const tmp = hashCons({});
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = (opts) => hashCons(opts);
  return hashC;
}
var isLE;
var init_utils = __esm(() => {
  init__assert();
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  isLE = /* @__PURE__ */ (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
});

// node_modules/@noble/hashes/esm/_md.js
function setBigUint64(view, byteOffset, value, isLE2) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE2);
  const _32n = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n & _u32_max);
  const wl = Number(value & _u32_max);
  const h = isLE2 ? 4 : 0;
  const l = isLE2 ? 0 : 4;
  view.setUint32(byteOffset + h, wh, isLE2);
  view.setUint32(byteOffset + l, wl, isLE2);
}
function Chi(a, b, c) {
  return a & b ^ ~a & c;
}
function Maj(a, b, c) {
  return a & b ^ a & c ^ b & c;
}
var HashMD;
var init__md = __esm(() => {
  init__assert();
  init_utils();
  HashMD = class HashMD extends Hash {
    constructor(blockLen, outputLen, padOffset, isLE2) {
      super();
      this.blockLen = blockLen;
      this.outputLen = outputLen;
      this.padOffset = padOffset;
      this.isLE = isLE2;
      this.finished = false;
      this.length = 0;
      this.pos = 0;
      this.destroyed = false;
      this.buffer = new Uint8Array(blockLen);
      this.view = createView(this.buffer);
    }
    update(data) {
      aexists(this);
      const { view, buffer, blockLen } = this;
      data = toBytes2(data);
      const len = data.length;
      for (let pos = 0;pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        if (take === blockLen) {
          const dataView = createView(data);
          for (;blockLen <= len - pos; pos += blockLen)
            this.process(dataView, pos);
          continue;
        }
        buffer.set(data.subarray(pos, pos + take), this.pos);
        this.pos += take;
        pos += take;
        if (this.pos === blockLen) {
          this.process(view, 0);
          this.pos = 0;
        }
      }
      this.length += data.length;
      this.roundClean();
      return this;
    }
    digestInto(out) {
      aexists(this);
      aoutput(out, this);
      this.finished = true;
      const { buffer, view, blockLen, isLE: isLE2 } = this;
      let { pos } = this;
      buffer[pos++] = 128;
      this.buffer.subarray(pos).fill(0);
      if (this.padOffset > blockLen - pos) {
        this.process(view, 0);
        pos = 0;
      }
      for (let i = pos;i < blockLen; i++)
        buffer[i] = 0;
      setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
      this.process(view, 0);
      const oview = createView(out);
      const len = this.outputLen;
      if (len % 4)
        throw new Error("_sha2: outputLen should be aligned to 32bit");
      const outLen = len / 4;
      const state = this.get();
      if (outLen > state.length)
        throw new Error("_sha2: outputLen bigger than state");
      for (let i = 0;i < outLen; i++)
        oview.setUint32(4 * i, state[i], isLE2);
    }
    digest() {
      const { buffer, outputLen } = this;
      this.digestInto(buffer);
      const res = buffer.slice(0, outputLen);
      this.destroy();
      return res;
    }
    _cloneInto(to) {
      to || (to = new this.constructor);
      to.set(...this.get());
      const { blockLen, buffer, length, finished, destroyed, pos } = this;
      to.length = length;
      to.pos = pos;
      to.finished = finished;
      to.destroyed = destroyed;
      if (length % blockLen)
        to.buffer.set(buffer);
      return to;
    }
  };
});

// node_modules/@noble/hashes/esm/sha256.js
var SHA256_K, SHA256_IV, SHA256_W, SHA256, sha256;
var init_sha256 = __esm(() => {
  init__md();
  init_utils();
  SHA256_K = /* @__PURE__ */ new Uint32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  SHA256_IV = /* @__PURE__ */ new Uint32Array([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]);
  SHA256_W = /* @__PURE__ */ new Uint32Array(64);
  SHA256 = class SHA256 extends HashMD {
    constructor() {
      super(64, 32, 8, false);
      this.A = SHA256_IV[0] | 0;
      this.B = SHA256_IV[1] | 0;
      this.C = SHA256_IV[2] | 0;
      this.D = SHA256_IV[3] | 0;
      this.E = SHA256_IV[4] | 0;
      this.F = SHA256_IV[5] | 0;
      this.G = SHA256_IV[6] | 0;
      this.H = SHA256_IV[7] | 0;
    }
    get() {
      const { A, B, C, D, E, F, G, H } = this;
      return [A, B, C, D, E, F, G, H];
    }
    set(A, B, C, D, E, F, G, H) {
      this.A = A | 0;
      this.B = B | 0;
      this.C = C | 0;
      this.D = D | 0;
      this.E = E | 0;
      this.F = F | 0;
      this.G = G | 0;
      this.H = H | 0;
    }
    process(view, offset) {
      for (let i = 0;i < 16; i++, offset += 4)
        SHA256_W[i] = view.getUint32(offset, false);
      for (let i = 16;i < 64; i++) {
        const W15 = SHA256_W[i - 15];
        const W2 = SHA256_W[i - 2];
        const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
        const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
        SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
      }
      let { A, B, C, D, E, F, G, H } = this;
      for (let i = 0;i < 64; i++) {
        const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
        const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
        const sigma0 = rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22);
        const T2 = sigma0 + Maj(A, B, C) | 0;
        H = G;
        G = F;
        F = E;
        E = D + T1 | 0;
        D = C;
        C = B;
        B = A;
        A = T1 + T2 | 0;
      }
      A = A + this.A | 0;
      B = B + this.B | 0;
      C = C + this.C | 0;
      D = D + this.D | 0;
      E = E + this.E | 0;
      F = F + this.F | 0;
      G = G + this.G | 0;
      H = H + this.H | 0;
      this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
      SHA256_W.fill(0);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0);
      this.buffer.fill(0);
    }
  };
  sha256 = /* @__PURE__ */ wrapConstructor(() => new SHA256);
});

// node_modules/viem/_esm/errors/address.js
var InvalidAddressError;
var init_address = __esm(() => {
  init_base();
  InvalidAddressError = class InvalidAddressError extends BaseError {
    constructor({ address }) {
      super(`Address "${address}" is invalid.`, {
        metaMessages: [
          "- Address must be a hex value of 20 bytes (40 hex characters).",
          "- Address must match its checksum counterpart."
        ],
        name: "InvalidAddressError"
      });
    }
  };
});

// node_modules/viem/_esm/errors/chain.js
var InvalidChainIdError;
var init_chain = __esm(() => {
  init_base();
  InvalidChainIdError = class InvalidChainIdError extends BaseError {
    constructor({ chainId }) {
      super(typeof chainId === "number" ? `Chain ID "${chainId}" is invalid.` : "Chain ID is invalid.", { name: "InvalidChainIdError" });
    }
  };
});

// node_modules/viem/_esm/errors/node.js
var ExecutionRevertedError, FeeCapTooHighError, FeeCapTooLowError, NonceTooHighError, NonceTooLowError, NonceMaxValueError, InsufficientFundsError, IntrinsicGasTooHighError, IntrinsicGasTooLowError, TransactionTypeNotSupportedError, TipAboveFeeCapError, UnknownNodeError;
var init_node = __esm(() => {
  init_formatGwei();
  init_base();
  ExecutionRevertedError = class ExecutionRevertedError extends BaseError {
    constructor({ cause, message } = {}) {
      const reason = message?.replace("execution reverted: ", "")?.replace("execution reverted", "");
      super(`Execution reverted ${reason ? `with reason: ${reason}` : "for an unknown reason"}.`, {
        cause,
        name: "ExecutionRevertedError"
      });
    }
  };
  Object.defineProperty(ExecutionRevertedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 3
  });
  Object.defineProperty(ExecutionRevertedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /execution reverted/
  });
  FeeCapTooHighError = class FeeCapTooHighError extends BaseError {
    constructor({ cause, maxFeePerGas } = {}) {
      super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)} gwei` : ""}) cannot be higher than the maximum allowed value (2^256-1).`, {
        cause,
        name: "FeeCapTooHighError"
      });
    }
  };
  Object.defineProperty(FeeCapTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
  });
  FeeCapTooLowError = class FeeCapTooLowError extends BaseError {
    constructor({ cause, maxFeePerGas } = {}) {
      super(`The fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)}` : ""} gwei) cannot be lower than the block base fee.`, {
        cause,
        name: "FeeCapTooLowError"
      });
    }
  };
  Object.defineProperty(FeeCapTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
  });
  NonceTooHighError = class NonceTooHighError extends BaseError {
    constructor({ cause, nonce } = {}) {
      super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}is higher than the next one expected.`, { cause, name: "NonceTooHighError" });
    }
  };
  Object.defineProperty(NonceTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too high/
  });
  NonceTooLowError = class NonceTooLowError extends BaseError {
    constructor({ cause, nonce } = {}) {
      super([
        `Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}is lower than the current nonce of the account.`,
        "Try increasing the nonce or find the latest nonce with `getTransactionCount`."
      ].join(`
`), { cause, name: "NonceTooLowError" });
    }
  };
  Object.defineProperty(NonceTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce too low|transaction already imported|already known/
  });
  NonceMaxValueError = class NonceMaxValueError extends BaseError {
    constructor({ cause, nonce } = {}) {
      super(`Nonce provided for the transaction ${nonce ? `(${nonce}) ` : ""}exceeds the maximum allowed nonce.`, { cause, name: "NonceMaxValueError" });
    }
  };
  Object.defineProperty(NonceMaxValueError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /nonce has max value/
  });
  InsufficientFundsError = class InsufficientFundsError extends BaseError {
    constructor({ cause } = {}) {
      super([
        "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."
      ].join(`
`), {
        cause,
        metaMessages: [
          "This error could arise when the account does not have enough funds to:",
          " - pay for the total gas fee,",
          " - pay for the value to send.",
          " ",
          "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
          " - `gas` is the amount of gas needed for transaction to execute,",
          " - `gas fee` is the gas fee,",
          " - `value` is the amount of ether to send to the recipient."
        ],
        name: "InsufficientFundsError"
      });
    }
  };
  Object.defineProperty(InsufficientFundsError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /insufficient funds|exceeds transaction sender account balance/
  });
  IntrinsicGasTooHighError = class IntrinsicGasTooHighError extends BaseError {
    constructor({ cause, gas } = {}) {
      super(`The amount of gas ${gas ? `(${gas}) ` : ""}provided for the transaction exceeds the limit allowed for the block.`, {
        cause,
        name: "IntrinsicGasTooHighError"
      });
    }
  };
  Object.defineProperty(IntrinsicGasTooHighError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too high|gas limit reached/
  });
  IntrinsicGasTooLowError = class IntrinsicGasTooLowError extends BaseError {
    constructor({ cause, gas } = {}) {
      super(`The amount of gas ${gas ? `(${gas}) ` : ""}provided for the transaction is too low.`, {
        cause,
        name: "IntrinsicGasTooLowError"
      });
    }
  };
  Object.defineProperty(IntrinsicGasTooLowError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /intrinsic gas too low/
  });
  TransactionTypeNotSupportedError = class TransactionTypeNotSupportedError extends BaseError {
    constructor({ cause }) {
      super("The transaction type is not supported for this chain.", {
        cause,
        name: "TransactionTypeNotSupportedError"
      });
    }
  };
  Object.defineProperty(TransactionTypeNotSupportedError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /transaction type not valid/
  });
  TipAboveFeeCapError = class TipAboveFeeCapError extends BaseError {
    constructor({ cause, maxPriorityFeePerGas, maxFeePerGas } = {}) {
      super([
        `The provided tip (\`maxPriorityFeePerGas\`${maxPriorityFeePerGas ? ` = ${formatGwei(maxPriorityFeePerGas)} gwei` : ""}) cannot be higher than the fee cap (\`maxFeePerGas\`${maxFeePerGas ? ` = ${formatGwei(maxFeePerGas)} gwei` : ""}).`
      ].join(`
`), {
        cause,
        name: "TipAboveFeeCapError"
      });
    }
  };
  Object.defineProperty(TipAboveFeeCapError, "nodeMessage", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
  });
  UnknownNodeError = class UnknownNodeError extends BaseError {
    constructor({ cause }) {
      super(`An error occurred while executing: ${cause?.shortMessage}`, {
        cause,
        name: "UnknownNodeError"
      });
    }
  };
});

// node_modules/viem/_esm/utils/lru.js
var LruMap;
var init_lru = __esm(() => {
  LruMap = class LruMap extends Map {
    constructor(size2) {
      super();
      Object.defineProperty(this, "maxSize", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: undefined
      });
      this.maxSize = size2;
    }
    get(key) {
      const value = super.get(key);
      if (super.has(key) && value !== undefined) {
        this.delete(key);
        super.set(key, value);
      }
      return value;
    }
    set(key, value) {
      super.set(key, value);
      if (this.maxSize && this.size > this.maxSize) {
        const firstKey = this.keys().next().value;
        if (firstKey)
          this.delete(firstKey);
      }
      return this;
    }
  };
});

// node_modules/@noble/hashes/esm/_u64.js
function fromBig(n, le = false) {
  if (le)
    return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
  return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i = 0;i < lst.length; i++) {
    const { h, l } = fromBig(lst[i], le);
    [Ah[i], Al[i]] = [h, l];
  }
  return [Ah, Al];
}
var U32_MASK64, _32n, rotlSH = (h, l, s) => h << s | l >>> 32 - s, rotlSL = (h, l, s) => l << s | h >>> 32 - s, rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s, rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
var init__u64 = __esm(() => {
  U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
  _32n = /* @__PURE__ */ BigInt(32);
});

// node_modules/@noble/hashes/esm/sha3.js
function keccakP(s, rounds = 24) {
  const B = new Uint32Array(5 * 2);
  for (let round = 24 - rounds;round < 24; round++) {
    for (let x = 0;x < 10; x++)
      B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
    for (let x = 0;x < 10; x += 2) {
      const idx1 = (x + 8) % 10;
      const idx0 = (x + 2) % 10;
      const B0 = B[idx0];
      const B1 = B[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
      for (let y = 0;y < 50; y += 10) {
        s[x + y] ^= Th;
        s[x + y + 1] ^= Tl;
      }
    }
    let curH = s[2];
    let curL = s[3];
    for (let t = 0;t < 24; t++) {
      const shift = SHA3_ROTL[t];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t];
      curH = s[PI];
      curL = s[PI + 1];
      s[PI] = Th;
      s[PI + 1] = Tl;
    }
    for (let y = 0;y < 50; y += 10) {
      for (let x = 0;x < 10; x++)
        B[x] = s[y + x];
      for (let x = 0;x < 10; x++)
        s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
    }
    s[0] ^= SHA3_IOTA_H[round];
    s[1] ^= SHA3_IOTA_L[round];
  }
  B.fill(0);
}
var SHA3_PI, SHA3_ROTL, _SHA3_IOTA, _0n, _1n, _2n, _7n, _256n, _0x71n, SHA3_IOTA_H, SHA3_IOTA_L, rotlH = (h, l, s) => s > 32 ? rotlBH(h, l, s) : rotlSH(h, l, s), rotlL = (h, l, s) => s > 32 ? rotlBL(h, l, s) : rotlSL(h, l, s), Keccak, gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen)), sha3_224, sha3_256, sha3_384, sha3_512, keccak_224, keccak_256, keccak_384, keccak_512, genShake = (suffix, blockLen, outputLen) => wrapXOFConstructorWithOpts((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true)), shake128, shake256;
var init_sha3 = __esm(() => {
  init__assert();
  init__u64();
  init_utils();
  SHA3_PI = [];
  SHA3_ROTL = [];
  _SHA3_IOTA = [];
  _0n = /* @__PURE__ */ BigInt(0);
  _1n = /* @__PURE__ */ BigInt(1);
  _2n = /* @__PURE__ */ BigInt(2);
  _7n = /* @__PURE__ */ BigInt(7);
  _256n = /* @__PURE__ */ BigInt(256);
  _0x71n = /* @__PURE__ */ BigInt(113);
  for (let round = 0, R = _1n, x = 1, y = 0;round < 24; round++) {
    [x, y] = [y, (2 * x + 3 * y) % 5];
    SHA3_PI.push(2 * (5 * y + x));
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    let t = _0n;
    for (let j = 0;j < 7; j++) {
      R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
      if (R & _2n)
        t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
    }
    _SHA3_IOTA.push(t);
  }
  [SHA3_IOTA_H, SHA3_IOTA_L] = /* @__PURE__ */ split(_SHA3_IOTA, true);
  Keccak = class Keccak extends Hash {
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
      super();
      this.blockLen = blockLen;
      this.suffix = suffix;
      this.outputLen = outputLen;
      this.enableXOF = enableXOF;
      this.rounds = rounds;
      this.pos = 0;
      this.posOut = 0;
      this.finished = false;
      this.destroyed = false;
      anumber(outputLen);
      if (0 >= this.blockLen || this.blockLen >= 200)
        throw new Error("Sha3 supports only keccak-f1600 function");
      this.state = new Uint8Array(200);
      this.state32 = u32(this.state);
    }
    keccak() {
      if (!isLE)
        byteSwap32(this.state32);
      keccakP(this.state32, this.rounds);
      if (!isLE)
        byteSwap32(this.state32);
      this.posOut = 0;
      this.pos = 0;
    }
    update(data) {
      aexists(this);
      const { blockLen, state } = this;
      data = toBytes2(data);
      const len = data.length;
      for (let pos = 0;pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        for (let i = 0;i < take; i++)
          state[this.pos++] ^= data[pos++];
        if (this.pos === blockLen)
          this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished)
        return;
      this.finished = true;
      const { state, suffix, pos, blockLen } = this;
      state[pos] ^= suffix;
      if ((suffix & 128) !== 0 && pos === blockLen - 1)
        this.keccak();
      state[blockLen - 1] ^= 128;
      this.keccak();
    }
    writeInto(out) {
      aexists(this, false);
      abytes(out);
      this.finish();
      const bufferOut = this.state;
      const { blockLen } = this;
      for (let pos = 0, len = out.length;pos < len; ) {
        if (this.posOut >= blockLen)
          this.keccak();
        const take = Math.min(blockLen - this.posOut, len - pos);
        out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
        this.posOut += take;
        pos += take;
      }
      return out;
    }
    xofInto(out) {
      if (!this.enableXOF)
        throw new Error("XOF is not possible for this instance");
      return this.writeInto(out);
    }
    xof(bytes) {
      anumber(bytes);
      return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
      aoutput(out, this);
      if (this.finished)
        throw new Error("digest() was already called");
      this.writeInto(out);
      this.destroy();
      return out;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true;
      this.state.fill(0);
    }
    _cloneInto(to) {
      const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
      to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
      to.state32.set(this.state32);
      to.pos = this.pos;
      to.posOut = this.posOut;
      to.finished = this.finished;
      to.rounds = rounds;
      to.suffix = suffix;
      to.outputLen = outputLen;
      to.enableXOF = enableXOF;
      to.destroyed = this.destroyed;
      return to;
    }
  };
  sha3_224 = /* @__PURE__ */ gen(6, 144, 224 / 8);
  sha3_256 = /* @__PURE__ */ gen(6, 136, 256 / 8);
  sha3_384 = /* @__PURE__ */ gen(6, 104, 384 / 8);
  sha3_512 = /* @__PURE__ */ gen(6, 72, 512 / 8);
  keccak_224 = /* @__PURE__ */ gen(1, 144, 224 / 8);
  keccak_256 = /* @__PURE__ */ gen(1, 136, 256 / 8);
  keccak_384 = /* @__PURE__ */ gen(1, 104, 384 / 8);
  keccak_512 = /* @__PURE__ */ gen(1, 72, 512 / 8);
  shake128 = /* @__PURE__ */ genShake(31, 168, 128 / 8);
  shake256 = /* @__PURE__ */ genShake(31, 136, 256 / 8);
});

// node_modules/viem/_esm/utils/hash/keccak256.js
function keccak256(value, to_) {
  const to = to_ || "hex";
  const bytes = keccak_256(isHex(value, { strict: false }) ? toBytes(value) : value);
  if (to === "bytes")
    return bytes;
  return toHex(bytes);
}
var init_keccak256 = __esm(() => {
  init_sha3();
  init_toBytes();
  init_toHex();
});

// node_modules/viem/_esm/utils/address/getAddress.js
function checksumAddress(address_, chainId) {
  if (checksumAddressCache.has(`${address_}.${chainId}`))
    return checksumAddressCache.get(`${address_}.${chainId}`);
  const hexAddress = chainId ? `${chainId}${address_.toLowerCase()}` : address_.substring(2).toLowerCase();
  const hash = keccak256(stringToBytes(hexAddress), "bytes");
  const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split("");
  for (let i = 0;i < 40; i += 2) {
    if (hash[i >> 1] >> 4 >= 8 && address[i]) {
      address[i] = address[i].toUpperCase();
    }
    if ((hash[i >> 1] & 15) >= 8 && address[i + 1]) {
      address[i + 1] = address[i + 1].toUpperCase();
    }
  }
  const result = `0x${address.join("")}`;
  checksumAddressCache.set(`${address_}.${chainId}`, result);
  return result;
}
var checksumAddressCache;
var init_getAddress = __esm(() => {
  init_toBytes();
  init_keccak256();
  init_lru();
  checksumAddressCache = /* @__PURE__ */ new LruMap(8192);
});

// node_modules/viem/_esm/utils/address/isAddress.js
function isAddress(address, options) {
  const { strict = true } = options ?? {};
  const cacheKey = `${address}.${strict}`;
  if (isAddressCache.has(cacheKey))
    return isAddressCache.get(cacheKey);
  const result = (() => {
    if (!addressRegex.test(address))
      return false;
    if (address.toLowerCase() === address)
      return true;
    if (strict)
      return checksumAddress(address) === address;
    return true;
  })();
  isAddressCache.set(cacheKey, result);
  return result;
}
var addressRegex, isAddressCache;
var init_isAddress = __esm(() => {
  init_lru();
  init_getAddress();
  addressRegex = /^0x[a-fA-F0-9]{40}$/;
  isAddressCache = /* @__PURE__ */ new LruMap(8192);
});

// node_modules/viem/_esm/utils/data/slice.js
function slice(value, start, end, { strict } = {}) {
  if (isHex(value, { strict: false }))
    return sliceHex(value, start, end, {
      strict
    });
  return sliceBytes(value, start, end, {
    strict
  });
}
function assertStartOffset(value, start) {
  if (typeof start === "number" && start > 0 && start > size(value) - 1)
    throw new SliceOffsetOutOfBoundsError({
      offset: start,
      position: "start",
      size: size(value)
    });
}
function assertEndOffset(value, start, end) {
  if (typeof start === "number" && typeof end === "number" && size(value) !== end - start) {
    throw new SliceOffsetOutOfBoundsError({
      offset: end,
      position: "end",
      size: size(value)
    });
  }
}
function sliceBytes(value_, start, end, { strict } = {}) {
  assertStartOffset(value_, start);
  const value = value_.slice(start, end);
  if (strict)
    assertEndOffset(value, start, end);
  return value;
}
function sliceHex(value_, start, end, { strict } = {}) {
  assertStartOffset(value_, start);
  const value = `0x${value_.replace("0x", "").slice((start ?? 0) * 2, (end ?? value_.length) * 2)}`;
  if (strict)
    assertEndOffset(value, start, end);
  return value;
}
var init_slice = __esm(() => {
  init_data();
  init_size();
});

// node_modules/viem/_esm/accounts/utils/parseAccount.js
function parseAccount(account) {
  if (typeof account === "string")
    return { address: account, type: "json-rpc" };
  return account;
}

// node_modules/viem/_esm/errors/stateOverride.js
function prettyStateMapping(stateMapping) {
  return stateMapping.reduce((pretty, { slot, value }) => {
    return `${pretty}        ${slot}: ${value}
`;
  }, "");
}
function prettyStateOverride(stateOverride) {
  return stateOverride.reduce((pretty, { address, ...state }) => {
    let val = `${pretty}    ${address}:
`;
    if (state.nonce)
      val += `      nonce: ${state.nonce}
`;
    if (state.balance)
      val += `      balance: ${state.balance}
`;
    if (state.code)
      val += `      code: ${state.code}
`;
    if (state.state) {
      val += `      state:
`;
      val += prettyStateMapping(state.state);
    }
    if (state.stateDiff) {
      val += `      stateDiff:
`;
      val += prettyStateMapping(state.stateDiff);
    }
    return val;
  }, `  State Override:
`).slice(0, -1);
}
var init_stateOverride = () => {
};

// node_modules/viem/_esm/errors/contract.js
var CallExecutionError;
var init_contract = __esm(() => {
  init_formatEther();
  init_formatGwei();
  init_base();
  init_stateOverride();
  init_transaction();
  CallExecutionError = class CallExecutionError extends BaseError {
    constructor(cause, { account: account_, docsPath, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, stateOverride }) {
      const account = account_ ? parseAccount(account_) : undefined;
      let prettyArgs = prettyPrint({
        from: account?.address,
        to,
        value: typeof value !== "undefined" && `${formatEther(value)} ${chain?.nativeCurrency?.symbol || "ETH"}`,
        data,
        gas,
        gasPrice: typeof gasPrice !== "undefined" && `${formatGwei(gasPrice)} gwei`,
        maxFeePerGas: typeof maxFeePerGas !== "undefined" && `${formatGwei(maxFeePerGas)} gwei`,
        maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== "undefined" && `${formatGwei(maxPriorityFeePerGas)} gwei`,
        nonce
      });
      if (stateOverride) {
        prettyArgs += `
${prettyStateOverride(stateOverride)}`;
      }
      super(cause.shortMessage, {
        cause,
        docsPath,
        metaMessages: [
          ...cause.metaMessages ? [...cause.metaMessages, " "] : [],
          "Raw Call Arguments:",
          prettyArgs
        ].filter(Boolean),
        name: "CallExecutionError"
      });
      Object.defineProperty(this, "cause", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: undefined
      });
      this.cause = cause;
    }
  };
});

// node_modules/viem/_esm/utils/errors/getNodeError.js
function getNodeError(err, args) {
  const message = (err.details || "").toLowerCase();
  const executionRevertedError = err instanceof BaseError ? err.walk((e) => e?.code === ExecutionRevertedError.code) : err;
  if (executionRevertedError instanceof BaseError)
    return new ExecutionRevertedError({
      cause: err,
      message: executionRevertedError.details
    });
  if (ExecutionRevertedError.nodeMessage.test(message))
    return new ExecutionRevertedError({
      cause: err,
      message: err.details
    });
  if (FeeCapTooHighError.nodeMessage.test(message))
    return new FeeCapTooHighError({
      cause: err,
      maxFeePerGas: args?.maxFeePerGas
    });
  if (FeeCapTooLowError.nodeMessage.test(message))
    return new FeeCapTooLowError({
      cause: err,
      maxFeePerGas: args?.maxFeePerGas
    });
  if (NonceTooHighError.nodeMessage.test(message))
    return new NonceTooHighError({ cause: err, nonce: args?.nonce });
  if (NonceTooLowError.nodeMessage.test(message))
    return new NonceTooLowError({ cause: err, nonce: args?.nonce });
  if (NonceMaxValueError.nodeMessage.test(message))
    return new NonceMaxValueError({ cause: err, nonce: args?.nonce });
  if (InsufficientFundsError.nodeMessage.test(message))
    return new InsufficientFundsError({ cause: err });
  if (IntrinsicGasTooHighError.nodeMessage.test(message))
    return new IntrinsicGasTooHighError({ cause: err, gas: args?.gas });
  if (IntrinsicGasTooLowError.nodeMessage.test(message))
    return new IntrinsicGasTooLowError({ cause: err, gas: args?.gas });
  if (TransactionTypeNotSupportedError.nodeMessage.test(message))
    return new TransactionTypeNotSupportedError({ cause: err });
  if (TipAboveFeeCapError.nodeMessage.test(message))
    return new TipAboveFeeCapError({
      cause: err,
      maxFeePerGas: args?.maxFeePerGas,
      maxPriorityFeePerGas: args?.maxPriorityFeePerGas
    });
  return new UnknownNodeError({
    cause: err
  });
}
var init_getNodeError = __esm(() => {
  init_base();
  init_node();
});

// node_modules/viem/_esm/utils/errors/getCallError.js
function getCallError(err, { docsPath, ...args }) {
  const cause = (() => {
    const cause2 = getNodeError(err, args);
    if (cause2 instanceof UnknownNodeError)
      return err;
    return cause2;
  })();
  return new CallExecutionError(cause, {
    docsPath,
    ...args
  });
}
var init_getCallError = __esm(() => {
  init_contract();
  init_node();
  init_getNodeError();
});

// node_modules/viem/_esm/utils/formatters/extract.js
function extract(value_, { format }) {
  if (!format)
    return {};
  const value = {};
  function extract_(formatted2) {
    const keys = Object.keys(formatted2);
    for (const key of keys) {
      if (key in value_)
        value[key] = value_[key];
      if (formatted2[key] && typeof formatted2[key] === "object" && !Array.isArray(formatted2[key]))
        extract_(formatted2[key]);
    }
  }
  const formatted = format(value_ || {});
  extract_(formatted);
  return value;
}

// node_modules/viem/_esm/utils/transaction/assertRequest.js
function assertRequest(args) {
  const { account: account_, gasPrice, maxFeePerGas, maxPriorityFeePerGas, to } = args;
  const account = account_ ? parseAccount(account_) : undefined;
  if (account && !isAddress(account.address))
    throw new InvalidAddressError({ address: account.address });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (typeof gasPrice !== "undefined" && (typeof maxFeePerGas !== "undefined" || typeof maxPriorityFeePerGas !== "undefined"))
    throw new FeeConflictError;
  if (maxFeePerGas && maxFeePerGas > maxUint256)
    throw new FeeCapTooHighError({ maxFeePerGas });
  if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({ maxFeePerGas, maxPriorityFeePerGas });
}
var init_assertRequest = __esm(() => {
  init_number();
  init_address();
  init_node();
  init_transaction();
  init_isAddress();
});

// src/constants/config.ts
var config = {
  DEFAULT_BLOCK_CONFIRMATIONS: 2
};

// node_modules/viem/_esm/utils/chain/defineChain.js
function defineChain(chain) {
  return {
    formatters: undefined,
    fees: undefined,
    serializers: undefined,
    ...chain
  };
}
// node_modules/viem/_esm/utils/formatters/transaction.js
init_fromHex();
var transactionType = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702"
};
function formatTransaction(transaction) {
  const transaction_ = {
    ...transaction,
    blockHash: transaction.blockHash ? transaction.blockHash : null,
    blockNumber: transaction.blockNumber ? BigInt(transaction.blockNumber) : null,
    chainId: transaction.chainId ? hexToNumber(transaction.chainId) : undefined,
    gas: transaction.gas ? BigInt(transaction.gas) : undefined,
    gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : undefined,
    maxFeePerBlobGas: transaction.maxFeePerBlobGas ? BigInt(transaction.maxFeePerBlobGas) : undefined,
    maxFeePerGas: transaction.maxFeePerGas ? BigInt(transaction.maxFeePerGas) : undefined,
    maxPriorityFeePerGas: transaction.maxPriorityFeePerGas ? BigInt(transaction.maxPriorityFeePerGas) : undefined,
    nonce: transaction.nonce ? hexToNumber(transaction.nonce) : undefined,
    to: transaction.to ? transaction.to : null,
    transactionIndex: transaction.transactionIndex ? Number(transaction.transactionIndex) : null,
    type: transaction.type ? transactionType[transaction.type] : undefined,
    typeHex: transaction.type ? transaction.type : undefined,
    value: transaction.value ? BigInt(transaction.value) : undefined,
    v: transaction.v ? BigInt(transaction.v) : undefined
  };
  if (transaction.authorizationList)
    transaction_.authorizationList = formatAuthorizationList(transaction.authorizationList);
  transaction_.yParity = (() => {
    if (transaction.yParity)
      return Number(transaction.yParity);
    if (typeof transaction_.v === "bigint") {
      if (transaction_.v === 0n || transaction_.v === 27n)
        return 0;
      if (transaction_.v === 1n || transaction_.v === 28n)
        return 1;
      if (transaction_.v >= 35n)
        return transaction_.v % 2n === 0n ? 1 : 0;
    }
    return;
  })();
  if (transaction_.type === "legacy") {
    delete transaction_.accessList;
    delete transaction_.maxFeePerBlobGas;
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
    delete transaction_.yParity;
  }
  if (transaction_.type === "eip2930") {
    delete transaction_.maxFeePerBlobGas;
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
  }
  if (transaction_.type === "eip1559") {
    delete transaction_.maxFeePerBlobGas;
  }
  return transaction_;
}
var defineTransaction = /* @__PURE__ */ defineFormatter("transaction", formatTransaction);
function formatAuthorizationList(authorizationList) {
  return authorizationList.map((authorization) => ({
    address: authorization.address,
    chainId: Number(authorization.chainId),
    nonce: Number(authorization.nonce),
    r: authorization.r,
    s: authorization.s,
    yParity: Number(authorization.yParity)
  }));
}

// node_modules/viem/_esm/utils/formatters/block.js
function formatBlock(block) {
  const transactions = (block.transactions ?? []).map((transaction) => {
    if (typeof transaction === "string")
      return transaction;
    return formatTransaction(transaction);
  });
  return {
    ...block,
    baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
    blobGasUsed: block.blobGasUsed ? BigInt(block.blobGasUsed) : undefined,
    difficulty: block.difficulty ? BigInt(block.difficulty) : undefined,
    excessBlobGas: block.excessBlobGas ? BigInt(block.excessBlobGas) : undefined,
    gasLimit: block.gasLimit ? BigInt(block.gasLimit) : undefined,
    gasUsed: block.gasUsed ? BigInt(block.gasUsed) : undefined,
    hash: block.hash ? block.hash : null,
    logsBloom: block.logsBloom ? block.logsBloom : null,
    nonce: block.nonce ? block.nonce : null,
    number: block.number ? BigInt(block.number) : null,
    size: block.size ? BigInt(block.size) : undefined,
    timestamp: block.timestamp ? BigInt(block.timestamp) : undefined,
    transactions,
    totalDifficulty: block.totalDifficulty ? BigInt(block.totalDifficulty) : null
  };
}
var defineBlock = /* @__PURE__ */ defineFormatter("block", formatBlock);

// node_modules/viem/_esm/utils/formatters/log.js
function formatLog(log, { args, eventName } = {}) {
  return {
    ...log,
    blockHash: log.blockHash ? log.blockHash : null,
    blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
    logIndex: log.logIndex ? Number(log.logIndex) : null,
    transactionHash: log.transactionHash ? log.transactionHash : null,
    transactionIndex: log.transactionIndex ? Number(log.transactionIndex) : null,
    ...eventName ? { args, eventName } : {}
  };
}

// node_modules/viem/_esm/utils/formatters/transactionReceipt.js
init_fromHex();
var receiptStatuses = {
  "0x0": "reverted",
  "0x1": "success"
};
function formatTransactionReceipt(transactionReceipt) {
  const receipt = {
    ...transactionReceipt,
    blockNumber: transactionReceipt.blockNumber ? BigInt(transactionReceipt.blockNumber) : null,
    contractAddress: transactionReceipt.contractAddress ? transactionReceipt.contractAddress : null,
    cumulativeGasUsed: transactionReceipt.cumulativeGasUsed ? BigInt(transactionReceipt.cumulativeGasUsed) : null,
    effectiveGasPrice: transactionReceipt.effectiveGasPrice ? BigInt(transactionReceipt.effectiveGasPrice) : null,
    gasUsed: transactionReceipt.gasUsed ? BigInt(transactionReceipt.gasUsed) : null,
    logs: transactionReceipt.logs ? transactionReceipt.logs.map((log) => formatLog(log)) : null,
    to: transactionReceipt.to ? transactionReceipt.to : null,
    transactionIndex: transactionReceipt.transactionIndex ? hexToNumber(transactionReceipt.transactionIndex) : null,
    status: transactionReceipt.status ? receiptStatuses[transactionReceipt.status] : null,
    type: transactionReceipt.type ? transactionType[transactionReceipt.type] || transactionReceipt.type : null
  };
  if (transactionReceipt.blobGasPrice)
    receipt.blobGasPrice = BigInt(transactionReceipt.blobGasPrice);
  if (transactionReceipt.blobGasUsed)
    receipt.blobGasUsed = BigInt(transactionReceipt.blobGasUsed);
  return receipt;
}
var defineTransactionReceipt = /* @__PURE__ */ defineFormatter("transactionReceipt", formatTransactionReceipt);

// node_modules/viem/_esm/utils/encoding/toRlp.js
init_base();
init_cursor2();
init_toBytes();
init_toHex();
function toRlp(bytes, to = "hex") {
  const encodable = getEncodable(bytes);
  const cursor = createCursor(new Uint8Array(encodable.length));
  encodable.encode(cursor);
  if (to === "hex")
    return bytesToHex(cursor.bytes);
  return cursor.bytes;
}
function getEncodable(bytes) {
  if (Array.isArray(bytes))
    return getEncodableList(bytes.map((x) => getEncodable(x)));
  return getEncodableBytes(bytes);
}
function getEncodableList(list) {
  const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
  const sizeOfBodyLength = getSizeOfLength(bodyLength);
  const length = (() => {
    if (bodyLength <= 55)
      return 1 + bodyLength;
    return 1 + sizeOfBodyLength + bodyLength;
  })();
  return {
    length,
    encode(cursor) {
      if (bodyLength <= 55) {
        cursor.pushByte(192 + bodyLength);
      } else {
        cursor.pushByte(192 + 55 + sizeOfBodyLength);
        if (sizeOfBodyLength === 1)
          cursor.pushUint8(bodyLength);
        else if (sizeOfBodyLength === 2)
          cursor.pushUint16(bodyLength);
        else if (sizeOfBodyLength === 3)
          cursor.pushUint24(bodyLength);
        else
          cursor.pushUint32(bodyLength);
      }
      for (const { encode } of list) {
        encode(cursor);
      }
    }
  };
}
function getEncodableBytes(bytesOrHex) {
  const bytes = typeof bytesOrHex === "string" ? hexToBytes(bytesOrHex) : bytesOrHex;
  const sizeOfBytesLength = getSizeOfLength(bytes.length);
  const length = (() => {
    if (bytes.length === 1 && bytes[0] < 128)
      return 1;
    if (bytes.length <= 55)
      return 1 + bytes.length;
    return 1 + sizeOfBytesLength + bytes.length;
  })();
  return {
    length,
    encode(cursor) {
      if (bytes.length === 1 && bytes[0] < 128) {
        cursor.pushBytes(bytes);
      } else if (bytes.length <= 55) {
        cursor.pushByte(128 + bytes.length);
        cursor.pushBytes(bytes);
      } else {
        cursor.pushByte(128 + 55 + sizeOfBytesLength);
        if (sizeOfBytesLength === 1)
          cursor.pushUint8(bytes.length);
        else if (sizeOfBytesLength === 2)
          cursor.pushUint16(bytes.length);
        else if (sizeOfBytesLength === 3)
          cursor.pushUint24(bytes.length);
        else
          cursor.pushUint32(bytes.length);
        cursor.pushBytes(bytes);
      }
    }
  };
}
function getSizeOfLength(length) {
  if (length < 2 ** 8)
    return 1;
  if (length < 2 ** 16)
    return 2;
  if (length < 2 ** 24)
    return 3;
  if (length < 2 ** 32)
    return 4;
  throw new BaseError("Length is too large.");
}

// node_modules/viem/_esm/utils/transaction/serializeTransaction.js
init_transaction();

// node_modules/viem/_esm/utils/authorization/serializeAuthorizationList.js
init_toHex();
function serializeAuthorizationList(authorizationList) {
  if (!authorizationList || authorizationList.length === 0)
    return [];
  const serializedAuthorizationList = [];
  for (const authorization of authorizationList) {
    const { chainId, nonce, ...signature } = authorization;
    const contractAddress = authorization.address;
    serializedAuthorizationList.push([
      chainId ? toHex(chainId) : "0x",
      contractAddress,
      nonce ? toHex(nonce) : "0x",
      ...toYParitySignatureArray({}, signature)
    ]);
  }
  return serializedAuthorizationList;
}

// node_modules/viem/_esm/utils/blob/blobsToCommitments.js
init_toBytes();
init_toHex();
function blobsToCommitments(parameters) {
  const { kzg } = parameters;
  const to = parameters.to ?? (typeof parameters.blobs[0] === "string" ? "hex" : "bytes");
  const blobs = typeof parameters.blobs[0] === "string" ? parameters.blobs.map((x) => hexToBytes(x)) : parameters.blobs;
  const commitments = [];
  for (const blob of blobs)
    commitments.push(Uint8Array.from(kzg.blobToKzgCommitment(blob)));
  return to === "bytes" ? commitments : commitments.map((x) => bytesToHex(x));
}

// node_modules/viem/_esm/utils/blob/blobsToProofs.js
init_toBytes();
init_toHex();
function blobsToProofs(parameters) {
  const { kzg } = parameters;
  const to = parameters.to ?? (typeof parameters.blobs[0] === "string" ? "hex" : "bytes");
  const blobs = typeof parameters.blobs[0] === "string" ? parameters.blobs.map((x) => hexToBytes(x)) : parameters.blobs;
  const commitments = typeof parameters.commitments[0] === "string" ? parameters.commitments.map((x) => hexToBytes(x)) : parameters.commitments;
  const proofs = [];
  for (let i = 0;i < blobs.length; i++) {
    const blob = blobs[i];
    const commitment = commitments[i];
    proofs.push(Uint8Array.from(kzg.computeBlobKzgProof(blob, commitment)));
  }
  return to === "bytes" ? proofs : proofs.map((x) => bytesToHex(x));
}

// node_modules/viem/_esm/utils/blob/commitmentToVersionedHash.js
init_toHex();

// node_modules/viem/_esm/utils/hash/sha256.js
init_sha256();
init_toBytes();
init_toHex();
function sha2562(value, to_) {
  const to = to_ || "hex";
  const bytes = sha256(isHex(value, { strict: false }) ? toBytes(value) : value);
  if (to === "bytes")
    return bytes;
  return toHex(bytes);
}

// node_modules/viem/_esm/utils/blob/commitmentToVersionedHash.js
function commitmentToVersionedHash(parameters) {
  const { commitment, version: version2 = 1 } = parameters;
  const to = parameters.to ?? (typeof commitment === "string" ? "hex" : "bytes");
  const versionedHash = sha2562(commitment, "bytes");
  versionedHash.set([version2], 0);
  return to === "bytes" ? versionedHash : bytesToHex(versionedHash);
}

// node_modules/viem/_esm/utils/blob/commitmentsToVersionedHashes.js
function commitmentsToVersionedHashes(parameters) {
  const { commitments, version: version2 } = parameters;
  const to = parameters.to ?? (typeof commitments[0] === "string" ? "hex" : "bytes");
  const hashes = [];
  for (const commitment of commitments) {
    hashes.push(commitmentToVersionedHash({
      commitment,
      to,
      version: version2
    }));
  }
  return hashes;
}

// node_modules/viem/_esm/constants/blob.js
var blobsPerTransaction = 6;
var bytesPerFieldElement = 32;
var fieldElementsPerBlob = 4096;
var bytesPerBlob = bytesPerFieldElement * fieldElementsPerBlob;
var maxBytesPerTransaction = bytesPerBlob * blobsPerTransaction - 1 - 1 * fieldElementsPerBlob * blobsPerTransaction;

// node_modules/viem/_esm/constants/kzg.js
var versionedHashVersionKzg = 1;

// node_modules/viem/_esm/errors/blob.js
init_base();

class BlobSizeTooLargeError extends BaseError {
  constructor({ maxSize, size: size2 }) {
    super("Blob size is too large.", {
      metaMessages: [`Max: ${maxSize} bytes`, `Given: ${size2} bytes`],
      name: "BlobSizeTooLargeError"
    });
  }
}

class EmptyBlobError extends BaseError {
  constructor() {
    super("Blob data must not be empty.", { name: "EmptyBlobError" });
  }
}

class InvalidVersionedHashSizeError extends BaseError {
  constructor({ hash, size: size2 }) {
    super(`Versioned hash "${hash}" size is invalid.`, {
      metaMessages: ["Expected: 32", `Received: ${size2}`],
      name: "InvalidVersionedHashSizeError"
    });
  }
}

class InvalidVersionedHashVersionError extends BaseError {
  constructor({ hash, version: version2 }) {
    super(`Versioned hash "${hash}" version is invalid.`, {
      metaMessages: [
        `Expected: ${versionedHashVersionKzg}`,
        `Received: ${version2}`
      ],
      name: "InvalidVersionedHashVersionError"
    });
  }
}

// node_modules/viem/_esm/utils/blob/toBlobs.js
init_cursor2();
init_size();
init_toBytes();
init_toHex();
function toBlobs(parameters) {
  const to = parameters.to ?? (typeof parameters.data === "string" ? "hex" : "bytes");
  const data = typeof parameters.data === "string" ? hexToBytes(parameters.data) : parameters.data;
  const size_ = size(data);
  if (!size_)
    throw new EmptyBlobError;
  if (size_ > maxBytesPerTransaction)
    throw new BlobSizeTooLargeError({
      maxSize: maxBytesPerTransaction,
      size: size_
    });
  const blobs = [];
  let active = true;
  let position = 0;
  while (active) {
    const blob = createCursor(new Uint8Array(bytesPerBlob));
    let size2 = 0;
    while (size2 < fieldElementsPerBlob) {
      const bytes = data.slice(position, position + (bytesPerFieldElement - 1));
      blob.pushByte(0);
      blob.pushBytes(bytes);
      if (bytes.length < 31) {
        blob.pushByte(128);
        active = false;
        break;
      }
      size2++;
      position += 31;
    }
    blobs.push(blob);
  }
  return to === "bytes" ? blobs.map((x) => x.bytes) : blobs.map((x) => bytesToHex(x.bytes));
}

// node_modules/viem/_esm/utils/blob/toBlobSidecars.js
function toBlobSidecars(parameters) {
  const { data, kzg, to } = parameters;
  const blobs = parameters.blobs ?? toBlobs({ data, to });
  const commitments = parameters.commitments ?? blobsToCommitments({ blobs, kzg, to });
  const proofs = parameters.proofs ?? blobsToProofs({ blobs, commitments, kzg, to });
  const sidecars = [];
  for (let i = 0;i < blobs.length; i++)
    sidecars.push({
      blob: blobs[i],
      commitment: commitments[i],
      proof: proofs[i]
    });
  return sidecars;
}

// node_modules/viem/_esm/utils/transaction/serializeTransaction.js
init_toHex();

// node_modules/viem/_esm/utils/transaction/assertTransaction.js
init_number();
init_address();
init_base();
init_chain();
init_node();
init_isAddress();
init_size();
init_slice();
init_fromHex();
function assertTransactionEIP7702(transaction) {
  const { authorizationList } = transaction;
  if (authorizationList) {
    for (const authorization of authorizationList) {
      const { chainId } = authorization;
      const address = authorization.address;
      if (!isAddress(address))
        throw new InvalidAddressError({ address });
      if (chainId < 0)
        throw new InvalidChainIdError({ chainId });
    }
  }
  assertTransactionEIP1559(transaction);
}
function assertTransactionEIP4844(transaction) {
  const { blobVersionedHashes } = transaction;
  if (blobVersionedHashes) {
    if (blobVersionedHashes.length === 0)
      throw new EmptyBlobError;
    for (const hash of blobVersionedHashes) {
      const size_ = size(hash);
      const version2 = hexToNumber(slice(hash, 0, 1));
      if (size_ !== 32)
        throw new InvalidVersionedHashSizeError({ hash, size: size_ });
      if (version2 !== versionedHashVersionKzg)
        throw new InvalidVersionedHashVersionError({
          hash,
          version: version2
        });
    }
  }
  assertTransactionEIP1559(transaction);
}
function assertTransactionEIP1559(transaction) {
  const { chainId, maxPriorityFeePerGas, maxFeePerGas, to } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (maxFeePerGas && maxFeePerGas > maxUint256)
    throw new FeeCapTooHighError({ maxFeePerGas });
  if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({ maxFeePerGas, maxPriorityFeePerGas });
}
function assertTransactionEIP2930(transaction) {
  const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (maxPriorityFeePerGas || maxFeePerGas)
    throw new BaseError("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
  if (gasPrice && gasPrice > maxUint256)
    throw new FeeCapTooHighError({ maxFeePerGas: gasPrice });
}
function assertTransactionLegacy(transaction) {
  const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (typeof chainId !== "undefined" && chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (maxPriorityFeePerGas || maxFeePerGas)
    throw new BaseError("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
  if (gasPrice && gasPrice > maxUint256)
    throw new FeeCapTooHighError({ maxFeePerGas: gasPrice });
}

// node_modules/viem/_esm/utils/transaction/getTransactionType.js
init_transaction();
function getTransactionType(transaction) {
  if (transaction.type)
    return transaction.type;
  if (typeof transaction.authorizationList !== "undefined")
    return "eip7702";
  if (typeof transaction.blobs !== "undefined" || typeof transaction.blobVersionedHashes !== "undefined" || typeof transaction.maxFeePerBlobGas !== "undefined" || typeof transaction.sidecars !== "undefined")
    return "eip4844";
  if (typeof transaction.maxFeePerGas !== "undefined" || typeof transaction.maxPriorityFeePerGas !== "undefined") {
    return "eip1559";
  }
  if (typeof transaction.gasPrice !== "undefined") {
    if (typeof transaction.accessList !== "undefined")
      return "eip2930";
    return "legacy";
  }
  throw new InvalidSerializableTransactionError({ transaction });
}

// node_modules/viem/_esm/utils/transaction/serializeAccessList.js
init_address();
init_transaction();
init_isAddress();
function serializeAccessList(accessList) {
  if (!accessList || accessList.length === 0)
    return [];
  const serializedAccessList = [];
  for (let i = 0;i < accessList.length; i++) {
    const { address, storageKeys } = accessList[i];
    for (let j = 0;j < storageKeys.length; j++) {
      if (storageKeys[j].length - 2 !== 64) {
        throw new InvalidStorageKeySizeError({ storageKey: storageKeys[j] });
      }
    }
    if (!isAddress(address, { strict: false })) {
      throw new InvalidAddressError({ address });
    }
    serializedAccessList.push([address, storageKeys]);
  }
  return serializedAccessList;
}

// node_modules/viem/_esm/utils/transaction/serializeTransaction.js
function serializeTransaction(transaction, signature) {
  const type = getTransactionType(transaction);
  if (type === "eip1559")
    return serializeTransactionEIP1559(transaction, signature);
  if (type === "eip2930")
    return serializeTransactionEIP2930(transaction, signature);
  if (type === "eip4844")
    return serializeTransactionEIP4844(transaction, signature);
  if (type === "eip7702")
    return serializeTransactionEIP7702(transaction, signature);
  return serializeTransactionLegacy(transaction, signature);
}
function serializeTransactionEIP7702(transaction, signature) {
  const { authorizationList, chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
  assertTransactionEIP7702(transaction);
  const serializedAccessList = serializeAccessList(accessList);
  const serializedAuthorizationList = serializeAuthorizationList(authorizationList);
  return concatHex([
    "0x04",
    toRlp([
      toHex(chainId),
      nonce ? toHex(nonce) : "0x",
      maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : "0x",
      maxFeePerGas ? toHex(maxFeePerGas) : "0x",
      gas ? toHex(gas) : "0x",
      to ?? "0x",
      value ? toHex(value) : "0x",
      data ?? "0x",
      serializedAccessList,
      serializedAuthorizationList,
      ...toYParitySignatureArray(transaction, signature)
    ])
  ]);
}
function serializeTransactionEIP4844(transaction, signature) {
  const { chainId, gas, nonce, to, value, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
  assertTransactionEIP4844(transaction);
  let blobVersionedHashes = transaction.blobVersionedHashes;
  let sidecars = transaction.sidecars;
  if (transaction.blobs && (typeof blobVersionedHashes === "undefined" || typeof sidecars === "undefined")) {
    const blobs2 = typeof transaction.blobs[0] === "string" ? transaction.blobs : transaction.blobs.map((x) => bytesToHex(x));
    const kzg = transaction.kzg;
    const commitments2 = blobsToCommitments({
      blobs: blobs2,
      kzg
    });
    if (typeof blobVersionedHashes === "undefined")
      blobVersionedHashes = commitmentsToVersionedHashes({
        commitments: commitments2
      });
    if (typeof sidecars === "undefined") {
      const proofs2 = blobsToProofs({ blobs: blobs2, commitments: commitments2, kzg });
      sidecars = toBlobSidecars({ blobs: blobs2, commitments: commitments2, proofs: proofs2 });
    }
  }
  const serializedAccessList = serializeAccessList(accessList);
  const serializedTransaction = [
    toHex(chainId),
    nonce ? toHex(nonce) : "0x",
    maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex(maxFeePerGas) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x",
    serializedAccessList,
    maxFeePerBlobGas ? toHex(maxFeePerBlobGas) : "0x",
    blobVersionedHashes ?? [],
    ...toYParitySignatureArray(transaction, signature)
  ];
  const blobs = [];
  const commitments = [];
  const proofs = [];
  if (sidecars)
    for (let i = 0;i < sidecars.length; i++) {
      const { blob, commitment, proof } = sidecars[i];
      blobs.push(blob);
      commitments.push(commitment);
      proofs.push(proof);
    }
  return concatHex([
    "0x03",
    sidecars ? toRlp([serializedTransaction, blobs, commitments, proofs]) : toRlp(serializedTransaction)
  ]);
}
function serializeTransactionEIP1559(transaction, signature) {
  const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
  assertTransactionEIP1559(transaction);
  const serializedAccessList = serializeAccessList(accessList);
  const serializedTransaction = [
    toHex(chainId),
    nonce ? toHex(nonce) : "0x",
    maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex(maxFeePerGas) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x",
    serializedAccessList,
    ...toYParitySignatureArray(transaction, signature)
  ];
  return concatHex([
    "0x02",
    toRlp(serializedTransaction)
  ]);
}
function serializeTransactionEIP2930(transaction, signature) {
  const { chainId, gas, data, nonce, to, value, accessList, gasPrice } = transaction;
  assertTransactionEIP2930(transaction);
  const serializedAccessList = serializeAccessList(accessList);
  const serializedTransaction = [
    toHex(chainId),
    nonce ? toHex(nonce) : "0x",
    gasPrice ? toHex(gasPrice) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x",
    serializedAccessList,
    ...toYParitySignatureArray(transaction, signature)
  ];
  return concatHex([
    "0x01",
    toRlp(serializedTransaction)
  ]);
}
function serializeTransactionLegacy(transaction, signature) {
  const { chainId = 0, gas, data, nonce, to, value, gasPrice } = transaction;
  assertTransactionLegacy(transaction);
  let serializedTransaction = [
    nonce ? toHex(nonce) : "0x",
    gasPrice ? toHex(gasPrice) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x"
  ];
  if (signature) {
    const v = (() => {
      if (signature.v >= 35n) {
        const inferredChainId = (signature.v - 35n) / 2n;
        if (inferredChainId > 0)
          return signature.v;
        return 27n + (signature.v === 35n ? 0n : 1n);
      }
      if (chainId > 0)
        return BigInt(chainId * 2) + BigInt(35n + signature.v - 27n);
      const v2 = 27n + (signature.v === 27n ? 0n : 1n);
      if (signature.v !== v2)
        throw new InvalidLegacyVError({ v: signature.v });
      return v2;
    })();
    const r = trim(signature.r);
    const s = trim(signature.s);
    serializedTransaction = [
      ...serializedTransaction,
      toHex(v),
      r === "0x00" ? "0x" : r,
      s === "0x00" ? "0x" : s
    ];
  } else if (chainId > 0) {
    serializedTransaction = [
      ...serializedTransaction,
      toHex(chainId),
      "0x",
      "0x"
    ];
  }
  return toRlp(serializedTransaction);
}
function toYParitySignatureArray(transaction, signature_) {
  const signature = signature_ ?? transaction;
  const { v, yParity } = signature;
  if (typeof signature.r === "undefined")
    return [];
  if (typeof signature.s === "undefined")
    return [];
  if (typeof v === "undefined" && typeof yParity === "undefined")
    return [];
  const r = trim(signature.r);
  const s = trim(signature.s);
  const yParity_ = (() => {
    if (typeof yParity === "number")
      return yParity ? toHex(1) : "0x";
    if (v === 0n)
      return "0x";
    if (v === 1n)
      return toHex(1);
    return v === 27n ? "0x" : toHex(1);
  })();
  return [yParity_, r === "0x00" ? "0x" : r, s === "0x00" ? "0x" : s];
}

// node_modules/viem/_esm/op-stack/contracts.js
var contracts = {
  gasPriceOracle: { address: "0x420000000000000000000000000000000000000F" },
  l1Block: { address: "0x4200000000000000000000000000000000000015" },
  l2CrossDomainMessenger: {
    address: "0x4200000000000000000000000000000000000007"
  },
  l2Erc721Bridge: { address: "0x4200000000000000000000000000000000000014" },
  l2StandardBridge: { address: "0x4200000000000000000000000000000000000010" },
  l2ToL1MessagePasser: {
    address: "0x4200000000000000000000000000000000000016"
  }
};

// node_modules/viem/_esm/op-stack/formatters.js
init_fromHex();
var formatters = {
  block: /* @__PURE__ */ defineBlock({
    format(args) {
      const transactions = args.transactions?.map((transaction) => {
        if (typeof transaction === "string")
          return transaction;
        const formatted = formatTransaction(transaction);
        if (formatted.typeHex === "0x7e") {
          formatted.isSystemTx = transaction.isSystemTx;
          formatted.mint = transaction.mint ? hexToBigInt(transaction.mint) : undefined;
          formatted.sourceHash = transaction.sourceHash;
          formatted.type = "deposit";
        }
        return formatted;
      });
      return {
        transactions,
        stateRoot: args.stateRoot
      };
    }
  }),
  transaction: /* @__PURE__ */ defineTransaction({
    format(args) {
      const transaction = {};
      if (args.type === "0x7e") {
        transaction.isSystemTx = args.isSystemTx;
        transaction.mint = args.mint ? hexToBigInt(args.mint) : undefined;
        transaction.sourceHash = args.sourceHash;
        transaction.type = "deposit";
      }
      return transaction;
    }
  }),
  transactionReceipt: /* @__PURE__ */ defineTransactionReceipt({
    format(args) {
      return {
        l1GasPrice: args.l1GasPrice ? hexToBigInt(args.l1GasPrice) : null,
        l1GasUsed: args.l1GasUsed ? hexToBigInt(args.l1GasUsed) : null,
        l1Fee: args.l1Fee ? hexToBigInt(args.l1Fee) : null,
        l1FeeScalar: args.l1FeeScalar ? Number(args.l1FeeScalar) : null
      };
    }
  })
};

// node_modules/viem/_esm/op-stack/serializers.js
init_address();
init_isAddress();
init_toHex();
function serializeTransaction2(transaction, signature) {
  if (isDeposit(transaction))
    return serializeTransactionDeposit(transaction);
  return serializeTransaction(transaction, signature);
}
var serializers = {
  transaction: serializeTransaction2
};
function serializeTransactionDeposit(transaction) {
  assertTransactionDeposit(transaction);
  const { sourceHash, data, from, gas, isSystemTx, mint, to, value } = transaction;
  const serializedTransaction = [
    sourceHash,
    from,
    to ?? "0x",
    mint ? toHex(mint) : "0x",
    value ? toHex(value) : "0x",
    gas ? toHex(gas) : "0x",
    isSystemTx ? "0x1" : "0x",
    data ?? "0x"
  ];
  return concatHex([
    "0x7e",
    toRlp(serializedTransaction)
  ]);
}
function isDeposit(transaction) {
  if (transaction.type === "deposit")
    return true;
  if (typeof transaction.sourceHash !== "undefined")
    return true;
  return false;
}
function assertTransactionDeposit(transaction) {
  const { from, to } = transaction;
  if (from && !isAddress(from))
    throw new InvalidAddressError({ address: from });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
}

// node_modules/viem/_esm/op-stack/chainConfig.js
var chainConfig = {
  contracts,
  formatters,
  serializers
};

// node_modules/viem/_esm/chains/definitions/arbitrum.js
var arbitrum = /* @__PURE__ */ defineChain({
  id: 42161,
  name: "Arbitrum One",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://arb1.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Arbiscan",
      url: "https://arbiscan.io",
      apiUrl: "https://api.arbiscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7654707
    }
  }
});
// node_modules/viem/_esm/chains/definitions/arbitrumSepolia.js
var arbitrumSepolia = /* @__PURE__ */ defineChain({
  id: 421614,
  name: "Arbitrum Sepolia",
  nativeCurrency: {
    name: "Arbitrum Sepolia Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia-rollup.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Arbiscan",
      url: "https://sepolia.arbiscan.io",
      apiUrl: "https://api-sepolia.arbiscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 81930
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/avalanche.js
var avalanche = /* @__PURE__ */ defineChain({
  id: 43114,
  name: "Avalanche",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche",
    symbol: "AVAX"
  },
  rpcUrls: {
    default: { http: ["https://api.avax.network/ext/bc/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "SnowTrace",
      url: "https://snowtrace.io",
      apiUrl: "https://api.snowtrace.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 11907934
    }
  }
});
// node_modules/viem/_esm/chains/definitions/avalancheFuji.js
var avalancheFuji = /* @__PURE__ */ defineChain({
  id: 43113,
  name: "Avalanche Fuji",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche Fuji",
    symbol: "AVAX"
  },
  rpcUrls: {
    default: { http: ["https://api.avax-test.network/ext/bc/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "SnowTrace",
      url: "https://testnet.snowtrace.io",
      apiUrl: "https://api-testnet.snowtrace.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7096959
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/base.js
var sourceId = 1;
var base = /* @__PURE__ */ defineChain({
  ...chainConfig,
  id: 8453,
  name: "Base",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.base.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Basescan",
      url: "https://basescan.org",
      apiUrl: "https://api.basescan.org/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    disputeGameFactory: {
      [sourceId]: {
        address: "0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e"
      }
    },
    l2OutputOracle: {
      [sourceId]: {
        address: "0x56315b90c40730925ec5485cf004d835058518A0"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 5022
    },
    portal: {
      [sourceId]: {
        address: "0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",
        blockCreated: 17482143
      }
    },
    l1StandardBridge: {
      [sourceId]: {
        address: "0x3154Cf16ccdb4C6d922629664174b904d80F2C35",
        blockCreated: 17482143
      }
    }
  },
  sourceId
});
// node_modules/viem/_esm/chains/definitions/baseSepolia.js
var sourceId2 = 11155111;
var baseSepolia = /* @__PURE__ */ defineChain({
  ...chainConfig,
  id: 84532,
  network: "base-sepolia",
  name: "Base Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Basescan",
      url: "https://sepolia.basescan.org",
      apiUrl: "https://api-sepolia.basescan.org/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    disputeGameFactory: {
      [sourceId2]: {
        address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1"
      }
    },
    l2OutputOracle: {
      [sourceId2]: {
        address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254"
      }
    },
    portal: {
      [sourceId2]: {
        address: "0x49f53e41452c74589e85ca1677426ba426459e85",
        blockCreated: 4446677
      }
    },
    l1StandardBridge: {
      [sourceId2]: {
        address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120",
        blockCreated: 4446677
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1059647
    }
  },
  testnet: true,
  sourceId: sourceId2
});
// node_modules/viem/_esm/chains/definitions/bitlayerTestnet.js
var bitlayerTestnet = /* @__PURE__ */ defineChain({
  id: 200810,
  name: "Bitlayer Testnet",
  nativeCurrency: {
    name: "BTC",
    symbol: "BTC",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://testnet-rpc.bitlayer.org"],
      webSocket: ["wss://testnet-ws.bitlayer.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "bitlayer testnet scan",
      url: "https://testnet.btrscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0x5B256fE9e993902eCe49D138a5b1162cBb529474",
      blockCreated: 4135671
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/blastSepolia.js
var sourceId3 = 11155111;
var blastSepolia = /* @__PURE__ */ defineChain({
  id: 168587773,
  name: "Blast Sepolia",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.blast.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blastscan",
      url: "https://sepolia.blastscan.io",
      apiUrl: "https://api-sepolia.blastscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 756690
    }
  },
  testnet: true,
  sourceId: sourceId3
});
// node_modules/viem/_esm/chains/definitions/botanixTestnet.js
var botanixTestnet = /* @__PURE__ */ defineChain({
  id: 3636,
  name: "Botanix Testnet",
  nativeCurrency: { name: "Botanix", symbol: "BTC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://node.botanixlabs.dev"]
    }
  },
  blockExplorers: {
    default: {
      name: "Botanix Testnet Explorer",
      url: "https://testnet.botanixscan.io"
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/bscTestnet.js
var bscTestnet = /* @__PURE__ */ defineChain({
  id: 97,
  name: "Binance Smart Chain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "tBNB"
  },
  rpcUrls: {
    default: { http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"] }
  },
  blockExplorers: {
    default: {
      name: "BscScan",
      url: "https://testnet.bscscan.com",
      apiUrl: "https://api-testnet.bscscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 17422483
    }
  },
  testnet: true
});
// node_modules/viem/_esm/celo/fees.js
var fees = {
  estimateFeesPerGas: async (params) => {
    if (!params.request?.feeCurrency)
      return null;
    const [gasPrice, maxPriorityFeePerGas] = await Promise.all([
      estimateFeePerGasInFeeCurrency(params.client, params.request.feeCurrency),
      estimateMaxPriorityFeePerGasInFeeCurrency(params.client, params.request.feeCurrency)
    ]);
    const maxFeePerGas = params.multiply(gasPrice - maxPriorityFeePerGas) + maxPriorityFeePerGas;
    return {
      maxFeePerGas,
      maxPriorityFeePerGas
    };
  }
};
async function estimateFeePerGasInFeeCurrency(client, feeCurrency) {
  const fee = await client.request({
    method: "eth_gasPrice",
    params: [feeCurrency]
  });
  return BigInt(fee);
}
async function estimateMaxPriorityFeePerGasInFeeCurrency(client, feeCurrency) {
  const feesPerGas = await client.request({
    method: "eth_maxPriorityFeePerGas",
    params: [feeCurrency]
  });
  return BigInt(feesPerGas);
}

// node_modules/viem/_esm/celo/formatters.js
init_fromHex();
init_transactionRequest();

// node_modules/viem/_esm/celo/utils.js
function isEmpty(value) {
  return value === 0 || value === 0n || value === undefined || value === null || value === "0" || value === "" || typeof value === "string" && (trim(value).toLowerCase() === "0x" || trim(value).toLowerCase() === "0x00");
}
function isPresent(value) {
  return !isEmpty(value);
}
function isEIP1559(transaction) {
  return typeof transaction.maxFeePerGas !== "undefined" && typeof transaction.maxPriorityFeePerGas !== "undefined";
}
function isCIP64(transaction) {
  if (transaction.type === "cip64") {
    return true;
  }
  return isEIP1559(transaction) && isPresent(transaction.feeCurrency);
}

// node_modules/viem/_esm/celo/formatters.js
var formatters2 = {
  block: /* @__PURE__ */ defineBlock({
    format(args) {
      const transactions = args.transactions?.map((transaction) => {
        if (typeof transaction === "string")
          return transaction;
        const formatted = formatTransaction(transaction);
        return {
          ...formatted,
          ...transaction.gatewayFee ? {
            gatewayFee: hexToBigInt(transaction.gatewayFee),
            gatewayFeeRecipient: transaction.gatewayFeeRecipient
          } : {},
          feeCurrency: transaction.feeCurrency
        };
      });
      return {
        transactions,
        ...args.randomness ? { randomness: args.randomness } : {}
      };
    }
  }),
  transaction: /* @__PURE__ */ defineTransaction({
    format(args) {
      if (args.type === "0x7e")
        return {
          isSystemTx: args.isSystemTx,
          mint: args.mint ? hexToBigInt(args.mint) : undefined,
          sourceHash: args.sourceHash,
          type: "deposit"
        };
      const transaction = { feeCurrency: args.feeCurrency };
      if (args.type === "0x7b")
        transaction.type = "cip64";
      else {
        if (args.type === "0x7c")
          transaction.type = "cip42";
        transaction.gatewayFee = args.gatewayFee ? hexToBigInt(args.gatewayFee) : null;
        transaction.gatewayFeeRecipient = args.gatewayFeeRecipient;
      }
      return transaction;
    }
  }),
  transactionRequest: /* @__PURE__ */ defineTransactionRequest({
    format(args) {
      const request = {};
      if (args.feeCurrency)
        request.feeCurrency = args.feeCurrency;
      if (isCIP64(args))
        request.type = "0x7b";
      return request;
    }
  })
};

// node_modules/viem/_esm/celo/serializers.js
init_number();
init_address();
init_base();
init_chain();
init_node();
init_isAddress();
init_toHex();
function serializeTransaction3(transaction, signature) {
  if (isCIP64(transaction))
    return serializeTransactionCIP64(transaction, signature);
  return serializeTransaction2(transaction, signature);
}
var serializers2 = {
  transaction: serializeTransaction3
};
function serializeTransactionCIP64(transaction, signature) {
  assertTransactionCIP64(transaction);
  const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, feeCurrency, data } = transaction;
  const serializedTransaction = [
    toHex(chainId),
    nonce ? toHex(nonce) : "0x",
    maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex(maxFeePerGas) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x",
    serializeAccessList(accessList),
    feeCurrency,
    ...toYParitySignatureArray(transaction, signature)
  ];
  return concatHex([
    "0x7b",
    toRlp(serializedTransaction)
  ]);
}
var MAX_MAX_FEE_PER_GAS = maxUint256;
function assertTransactionCIP64(transaction) {
  const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, feeCurrency } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (gasPrice)
    throw new BaseError("`gasPrice` is not a valid CIP-64 Transaction attribute.");
  if (isPresent(maxFeePerGas) && maxFeePerGas > MAX_MAX_FEE_PER_GAS)
    throw new FeeCapTooHighError({ maxFeePerGas });
  if (isPresent(maxPriorityFeePerGas) && isPresent(maxFeePerGas) && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({ maxFeePerGas, maxPriorityFeePerGas });
  if (isPresent(feeCurrency) && !isAddress(feeCurrency)) {
    throw new BaseError("`feeCurrency` MUST be a token address for CIP-64 transactions.");
  }
  if (isEmpty(feeCurrency)) {
    throw new BaseError("`feeCurrency` must be provided for CIP-64 transactions.");
  }
}

// node_modules/viem/_esm/celo/chainConfig.js
var chainConfig2 = {
  contracts,
  formatters: formatters2,
  serializers: serializers2,
  fees
};

// node_modules/viem/_esm/chains/definitions/celoAlfajores.js
var sourceId4 = 17000;
var celoAlfajores = /* @__PURE__ */ defineChain({
  ...chainConfig2,
  id: 44787,
  name: "Alfajores",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "A-CELO"
  },
  rpcUrls: {
    default: {
      http: ["https://alfajores-forno.celo-testnet.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Celo Alfajores Explorer",
      url: "https://celo-alfajores.blockscout.com",
      apiUrl: "https://celo-alfajores.blockscout.com/api"
    }
  },
  contracts: {
    ...chainConfig2.contracts,
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 14569001
    },
    portal: {
      [sourceId4]: {
        address: "0x82527353927d8D069b3B452904c942dA149BA381",
        blockCreated: 2411324
      }
    },
    disputeGameFactory: {
      [sourceId4]: {
        address: "0xE28AAdcd9883746c0e5068F58f9ea06027b214cb",
        blockCreated: 2411324
      }
    },
    l2OutputOracle: {
      [sourceId4]: {
        address: "0x4a2635e9e4f6e45817b1D402ac4904c1d1752438",
        blockCreated: 2411324
      }
    },
    l1StandardBridge: {
      [sourceId4]: {
        address: "0xD1B0E0581973c9eB7f886967A606b9441A897037",
        blockCreated: 2411324
      }
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/cronosTestnet.js
var cronosTestnet = /* @__PURE__ */ defineChain({
  id: 338,
  name: "Cronos Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "CRO",
    symbol: "tCRO"
  },
  rpcUrls: {
    default: { http: ["https://evm-t3.cronos.org"] }
  },
  blockExplorers: {
    default: {
      name: "Cronos Explorer",
      url: "https://cronos.org/explorer/testnet3"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 10191251
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/gnosisChiado.js
var gnosisChiado = /* @__PURE__ */ defineChain({
  id: 10200,
  name: "Gnosis Chiado",
  nativeCurrency: {
    decimals: 18,
    name: "Gnosis",
    symbol: "xDAI"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.chiadochain.net"],
      webSocket: ["wss://rpc.chiadochain.net/wss"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.chiadochain.net",
      apiUrl: "https://blockscout.chiadochain.net/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 4967313
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/hashkeyChainTestnet.js
var hashkeyTestnet = /* @__PURE__ */ defineChain({
  id: 133,
  name: "HashKey Chain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "HashKey EcoPoints",
    symbol: "HSK"
  },
  rpcUrls: {
    default: {
      http: ["https://hashkeychain-testnet.alt.technology"]
    }
  },
  blockExplorers: {
    default: {
      name: "HashKey Chain Explorer",
      url: "https://hashkeychain-testnet-explorer.alt.technology"
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/inkSepolia.js
var sourceId5 = 11155111;
var inkSepolia = /* @__PURE__ */ defineChain({
  ...chainConfig,
  id: 763373,
  name: "Ink Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-gel-sepolia.inkonchain.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://explorer-sepolia.inkonchain.com/",
      apiUrl: "https://explorer-sepolia.inkonchain.com/api/v2"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 0
    },
    disputeGameFactory: {
      [sourceId5]: {
        address: "0x860e626c700af381133d9f4af31412a2d1db3d5d"
      }
    },
    portal: {
      [sourceId5]: {
        address: "0x5c1d29c6c9c8b0800692acc95d700bcb4966a1d7"
      }
    },
    l1StandardBridge: {
      [sourceId5]: {
        address: "0x33f60714bbd74d62b66d79213c348614de51901c"
      }
    }
  },
  testnet: true,
  sourceId: sourceId5
});
// node_modules/viem/_esm/errors/account.js
init_base();

class AccountNotFoundError extends BaseError {
  constructor({ docsPath } = {}) {
    super([
      "Could not find an Account to execute with this Action.",
      "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."
    ].join(`
`), {
      docsPath,
      docsSlug: "account",
      name: "AccountNotFoundError"
    });
  }
}

// node_modules/viem/_esm/linea/actions/estimateGas.js
init_toHex();
init_getCallError();
init_transactionRequest();
init_assertRequest();
async function estimateGas(client, args) {
  const { account: account_ = client.account } = args;
  if (!account_)
    throw new AccountNotFoundError;
  const account = parseAccount(account_);
  try {
    const { accessList, blockNumber, blockTag, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = args;
    const blockNumberHex = blockNumber ? numberToHex(blockNumber) : undefined;
    const block = blockNumberHex || blockTag;
    assertRequest(args);
    const chainFormat = client.chain?.formatters?.transactionRequest?.format;
    const format = chainFormat || formatTransactionRequest;
    const request = format({
      ...extract(rest, { format: chainFormat }),
      from: account?.address,
      accessList,
      data,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value
    });
    const { baseFeePerGas, gasLimit, priorityFeePerGas } = await client.request({
      method: "linea_estimateGas",
      params: block ? [request, block] : [request]
    });
    return {
      baseFeePerGas: BigInt(baseFeePerGas),
      gasLimit: BigInt(gasLimit),
      priorityFeePerGas: BigInt(priorityFeePerGas)
    };
  } catch (err) {
    throw getCallError(err, {
      ...args,
      account,
      chain: client.chain
    });
  }
}

// node_modules/viem/_esm/linea/chainConfig.js
var chainConfig3 = {
  fees: {
    estimateFeesPerGas,
    async maxPriorityFeePerGas({ block, client, request }) {
      const response = await estimateFeesPerGas({
        block,
        client,
        multiply: (x) => x,
        request,
        type: "eip1559"
      });
      if (!response?.maxPriorityFeePerGas)
        return null;
      return response.maxPriorityFeePerGas;
    }
  }
};
async function estimateFeesPerGas({ client, multiply, request, type }) {
  try {
    const response = await estimateGas(client, {
      ...request,
      account: request?.account
    });
    const { priorityFeePerGas: maxPriorityFeePerGas } = response;
    const baseFeePerGas = multiply(BigInt(response.baseFeePerGas));
    const maxFeePerGas = baseFeePerGas + maxPriorityFeePerGas;
    if (type === "legacy")
      return { gasPrice: maxFeePerGas };
    return {
      maxFeePerGas,
      maxPriorityFeePerGas
    };
  } catch {
    return null;
  }
}

// node_modules/viem/_esm/chains/definitions/lineaSepolia.js
var lineaSepolia = /* @__PURE__ */ defineChain({
  ...chainConfig3,
  id: 59141,
  name: "Linea Sepolia Testnet",
  nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia.linea.build"],
      webSocket: ["wss://rpc.sepolia.linea.build"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://sepolia.lineascan.build",
      apiUrl: "https://api-sepolia.lineascan.build/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 227427
    },
    ensRegistry: {
      address: "0x5B2636F0f2137B4aE722C01dd5122D7d3e9541f7",
      blockCreated: 2395094
    },
    ensUniversalResolver: {
      address: "0x72560a31B3DAEE82B984a7F51c6b3b1bb7CC9F50",
      blockCreated: 2395255
    }
  },
  ensTlds: [".linea.eth"],
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/mainnet.js
var mainnet = /* @__PURE__ */ defineChain({
  id: 1,
  name: "Ethereum",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://eth.merkle.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://etherscan.io",
      apiUrl: "https://api.etherscan.io/api"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    ensUniversalResolver: {
      address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
      blockCreated: 19258213
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
});
// node_modules/viem/_esm/chains/definitions/mantleSepoliaTestnet.js
var mantleSepoliaTestnet = /* @__PURE__ */ defineChain({
  id: 5003,
  name: "Mantle Sepolia Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "MNT",
    symbol: "MNT"
  },
  rpcUrls: {
    default: { http: ["https://rpc.sepolia.mantle.xyz"] }
  },
  blockExplorers: {
    default: {
      name: "Mantle Testnet Explorer",
      url: "https://explorer.sepolia.mantle.xyz/",
      apiUrl: "https://explorer.sepolia.mantle.xyz/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 4584012
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/megaethTestnet.js
var megaethTestnet = /* @__PURE__ */ defineChain({
  id: 6342,
  name: "MegaETH Testnet",
  nativeCurrency: {
    name: "MegaETH Testnet Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://carrot.megaeth.com/rpc"],
      webSocket: ["wss://carrot.megaeth.com/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "MegaETH Testnet Explorer",
      url: "https://www.megaexplorer.xyz/"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11"
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/modeTestnet.js
var sourceId6 = 11155111;
var modeTestnet = /* @__PURE__ */ defineChain({
  ...chainConfig,
  id: 919,
  name: "Mode Testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.mode.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia.explorer.mode.network",
      apiUrl: "https://sepolia.explorer.mode.network/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    l2OutputOracle: {
      [sourceId6]: {
        address: "0x2634BD65ba27AB63811c74A63118ACb312701Bfa",
        blockCreated: 3778393
      }
    },
    portal: {
      [sourceId6]: {
        address: "0x320e1580effF37E008F1C92700d1eBa47c1B23fD",
        blockCreated: 3778395
      }
    },
    l1StandardBridge: {
      [sourceId6]: {
        address: "0xbC5C679879B2965296756CD959C3C739769995E2",
        blockCreated: 3778392
      }
    },
    multicall3: {
      address: "0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF",
      blockCreated: 3019007
    }
  },
  testnet: true,
  sourceId: sourceId6
});
// node_modules/viem/_esm/chains/definitions/monadTestnet.js
var monadTestnet = /* @__PURE__ */ defineChain({
  id: 10143,
  name: "Monad Testnet",
  nativeCurrency: {
    name: "Testnet MON Token",
    symbol: "MON",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://testnet-rpc.monad.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "Monad Testnet explorer",
      url: "https://testnet.monadexplorer.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 251449
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/optimism.js
var sourceId7 = 1;
var optimism = /* @__PURE__ */ defineChain({
  ...chainConfig,
  id: 10,
  name: "OP Mainnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.optimism.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Optimism Explorer",
      url: "https://optimistic.etherscan.io",
      apiUrl: "https://api-optimistic.etherscan.io/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    disputeGameFactory: {
      [sourceId7]: {
        address: "0xe5965Ab5962eDc7477C8520243A95517CD252fA9"
      }
    },
    l2OutputOracle: {
      [sourceId7]: {
        address: "0xdfe97868233d1aa22e815a266982f2cf17685a27"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 4286263
    },
    portal: {
      [sourceId7]: {
        address: "0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"
      }
    },
    l1StandardBridge: {
      [sourceId7]: {
        address: "0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"
      }
    }
  },
  sourceId: sourceId7
});
// node_modules/viem/_esm/chains/definitions/optimismSepolia.js
var sourceId8 = 11155111;
var optimismSepolia = /* @__PURE__ */ defineChain({
  ...chainConfig,
  id: 11155420,
  name: "OP Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.optimism.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://optimism-sepolia.blockscout.com",
      apiUrl: "https://optimism-sepolia.blockscout.com/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    disputeGameFactory: {
      [sourceId8]: {
        address: "0x05F9613aDB30026FFd634f38e5C4dFd30a197Fa1"
      }
    },
    l2OutputOracle: {
      [sourceId8]: {
        address: "0x90E9c4f8a994a250F6aEfd61CAFb4F2e895D458F"
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1620204
    },
    portal: {
      [sourceId8]: {
        address: "0x16Fc5058F25648194471939df75CF27A2fdC48BC"
      }
    },
    l1StandardBridge: {
      [sourceId8]: {
        address: "0xFBb0621E0B23b5478B630BD55a5f21f67730B0F1"
      }
    }
  },
  testnet: true,
  sourceId: sourceId8
});
// node_modules/viem/_esm/chains/definitions/polygon.js
var polygon = /* @__PURE__ */ defineChain({
  id: 137,
  name: "Polygon",
  nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://polygon-rpc.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://polygonscan.com",
      apiUrl: "https://api.polygonscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 25770160
    }
  }
});
// node_modules/viem/_esm/chains/definitions/polygonAmoy.js
var polygonAmoy = /* @__PURE__ */ defineChain({
  id: 80002,
  name: "Polygon Amoy",
  nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-amoy.polygon.technology"]
    }
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://amoy.polygonscan.com",
      apiUrl: "https://api-amoy.polygonscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 3127388
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/saigon.js
var saigon = /* @__PURE__ */ defineChain({
  id: 2021,
  name: "Saigon Testnet",
  nativeCurrency: { name: "RON", symbol: "RON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://saigon-testnet.roninchain.com/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Saigon Explorer",
      url: "https://saigon-app.roninchain.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 18736871
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/scrollSepolia.js
var scrollSepolia = /* @__PURE__ */ defineChain({
  id: 534351,
  name: "Scroll Sepolia",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia-rpc.scroll.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Scrollscan",
      url: "https://sepolia.scrollscan.com",
      apiUrl: "https://api-sepolia.scrollscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 9473
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/seiTestnet.js
var seiTestnet = /* @__PURE__ */ defineChain({
  id: 1328,
  name: "Sei Testnet",
  nativeCurrency: { name: "Sei", symbol: "SEI", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://evm-rpc-testnet.sei-apis.com"],
      webSocket: ["wss://evm-ws-testnet.sei-apis.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Seitrace",
      url: "https://seitrace.com"
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/sepolia.js
var sepolia = /* @__PURE__ */ defineChain({
  id: 11155111,
  name: "Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.drpc.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io",
      apiUrl: "https://api-sepolia.etherscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 751532
    },
    ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
    ensUniversalResolver: {
      address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
      blockCreated: 5317080
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/shibariumTestnet.js
var shibariumTestnet = /* @__PURE__ */ defineChain({
  id: 157,
  name: "Puppynet Shibarium",
  nativeCurrency: {
    decimals: 18,
    name: "Bone",
    symbol: "BONE"
  },
  rpcUrls: {
    default: { http: ["https://puppynet.shibrpc.com"] }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://puppyscan.shib.io",
      apiUrl: "https://puppyscan.shib.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xA4029b74FBA366c926eDFA7Dd10B21C621170a4c",
      blockCreated: 3035769
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/soneiumMinato.js
var sourceId9 = 11155111;
var soneiumMinato = /* @__PURE__ */ defineChain({
  ...chainConfig,
  id: 1946,
  name: "Soneium Minato Testnet",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.minato.soneium.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://soneium-minato.blockscout.com",
      apiUrl: "https://soneium-minato.blockscout.com/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    disputeGameFactory: {
      [sourceId9]: {
        address: "0xB3Ad2c38E6e0640d7ce6aA952AB3A60E81bf7a01"
      }
    },
    l2OutputOracle: {
      [sourceId9]: {
        address: "0x710e5286C746eC38beeB7538d0146f60D27be343"
      }
    },
    portal: {
      [sourceId9]: {
        address: "0x65ea1489741A5D72fFdD8e6485B216bBdcC15Af3",
        blockCreated: 6466136
      }
    },
    l1StandardBridge: {
      [sourceId9]: {
        address: "0x5f5a404A5edabcDD80DB05E8e54A78c9EBF000C2",
        blockCreated: 6466136
      }
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1
    }
  },
  testnet: true,
  sourceId: sourceId9
});
// node_modules/viem/_esm/chains/definitions/sonicBlazeTestnet.js
var sonicBlazeTestnet = /* @__PURE__ */ defineChain({
  id: 57054,
  name: "Sonic Blaze Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Sonic",
    symbol: "S"
  },
  rpcUrls: {
    default: { http: ["https://rpc.blaze.soniclabs.com"] }
  },
  blockExplorers: {
    default: {
      name: "Sonic Blaze Testnet Explorer",
      url: "https://testnet.sonicscan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1100
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/unichainSepolia.js
var sourceId10 = 11155111;
var unichainSepolia = /* @__PURE__ */ defineChain({
  ...chainConfig,
  id: 1301,
  name: "Unichain Sepolia",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.unichain.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Uniscan",
      url: "https://sepolia.uniscan.xyz",
      apiUrl: "https://api-sepolia.uniscan.xyz/api"
    }
  },
  contracts: {
    ...chainConfig.contracts,
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 0
    },
    portal: {
      [sourceId10]: {
        address: "0x0d83dab629f0e0F9d36c0Cbc89B69a489f0751bD"
      }
    },
    l1StandardBridge: {
      [sourceId10]: {
        address: "0xea58fcA6849d79EAd1f26608855c2D6407d54Ce2"
      }
    },
    disputeGameFactory: {
      [sourceId10]: {
        address: "0xeff73e5aa3B9AEC32c659Aa3E00444d20a84394b"
      }
    }
  },
  testnet: true,
  sourceId: sourceId10
});
// node_modules/viem/_esm/chains/definitions/xLayerTestnet.js
var xLayerTestnet = /* @__PURE__ */ defineChain({
  id: 195,
  name: "X1 Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "OKB",
    symbol: "OKB"
  },
  rpcUrls: {
    default: { http: ["https://xlayertestrpc.okx.com"] }
  },
  blockExplorers: {
    default: {
      name: "OKLink",
      url: "https://www.oklink.com/xlayer-test"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 624344
    }
  },
  testnet: true
});
// node_modules/viem/_esm/chains/definitions/zircuitTestnet.js
var sourceId11 = 11155111;
var zircuitTestnet = /* @__PURE__ */ defineChain({
  ...chainConfig,
  id: 48899,
  name: "Zircuit Testnet",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://testnet.zircuit.com",
        "https://zircuit1-testnet.p2pify.com",
        "https://zircuit1-testnet.liquify.com"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "Zircuit Testnet Explorer",
      url: "https://explorer.testnet.zircuit.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 6040287
    },
    l2OutputOracle: {
      [sourceId11]: {
        address: "0x740C2dac453aEf7140809F80b72bf0e647af8148"
      }
    },
    portal: {
      [sourceId11]: {
        address: "0x787f1C8c5924178689E0560a43D848bF8E54b23e"
      }
    },
    l1StandardBridge: {
      [sourceId11]: {
        address: "0x0545c5fe980098C16fcD0eCB5E79753afa6d9af9"
      }
    }
  },
  testnet: true
});
// src/networks/networkTypes.ts
var networkTypes = {
  mainnet: "mainnet",
  testnet: "testnet",
  localhost: "localhost"
};

// src/networks/mainnetNetworks.ts
var mainnetNetworks = {
  ethereum: {
    name: "ethereum",
    type: networkTypes.mainnet,
    chainId: 1,
    chainSelector: 1,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: mainnet
  },
  base: {
    name: "base",
    type: networkTypes.mainnet,
    chainId: 8453,
    chainSelector: 8453,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: base
  },
  arbitrum: {
    name: "arbitrum",
    type: networkTypes.mainnet,
    chainId: 42161,
    chainSelector: 42161,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: arbitrum
  },
  polygon: {
    name: "polygon",
    type: networkTypes.mainnet,
    chainId: 137,
    chainSelector: 137,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: polygon
  },
  avalanche: {
    name: "avalanche",
    type: networkTypes.mainnet,
    chainId: 43114,
    chainSelector: 43114,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: avalanche
  },
  optimism: {
    name: "optimism",
    type: networkTypes.mainnet,
    chainId: 10,
    chainSelector: 10,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: optimism
  },
  polygonZkEvm: {
    name: "polygonZkEvm",
    type: networkTypes.mainnet,
    chainId: 137,
    chainSelector: 137,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: polygon
  }
};
// src/networks/customViemChains.ts
var astarShibuya = defineChain({
  id: 81,
  network: "astar-shibuya",
  name: "Astar Shibuya",
  nativeCurrency: { name: "SBY", symbol: "SBY", decimals: 18 },
  testnet: true,
  rpcUrls: {
    default: {
      http: ["https://evm.shibuya.astar.network"]
    }
  }
});
var coreTestnet = defineChain({
  id: 1114,
  network: "core-testnet",
  name: "Core testnet",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  testnet: true,
  rpcUrls: {
    default: {
      http: ["https://rpc.test2.btcs.network"]
    }
  }
});
var apechainCurtis = defineChain({
  id: 33111,
  network: "apechainCurtis",
  name: "apechainCurtis",
  nativeCurrency: { name: "APE", symbol: "APE", decimals: 18 },
  testnet: true,
  rpcUrls: {
    default: {
      http: ["https://rpc.curtis.apechain.com"]
    }
  }
});

// src/networks/testnetNetworks.ts
var testnetNetworks = {
  arbitrumSepolia: {
    name: "arbitrumSepolia",
    type: networkTypes.testnet,
    chainId: 421614,
    chainSelector: 421614,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: arbitrumSepolia
  },
  baseSepolia: {
    name: "baseSepolia",
    type: networkTypes.testnet,
    chainId: 84532,
    chainSelector: 84532,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: baseSepolia
  },
  astarShibuya: {
    name: "astarShibuya",
    type: networkTypes.testnet,
    chainId: 81,
    chainSelector: 81,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: astarShibuya
  },
  roninSaigon: {
    name: "roninSaigon",
    type: networkTypes.testnet,
    chainId: 2021,
    chainSelector: 2021,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: saigon
  },
  megaethTestnet: {
    name: "megaethTestnet",
    type: networkTypes.testnet,
    chainId: 6342,
    chainSelector: 6342,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: megaethTestnet
  },
  sonicBlaze: {
    name: "sonicBlaze",
    type: networkTypes.testnet,
    chainId: 57054,
    chainSelector: 57054,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: sonicBlazeTestnet
  },
  monadTestnet: {
    name: "monadTestnet",
    type: networkTypes.testnet,
    chainId: 10143,
    chainSelector: 10143,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: monadTestnet
  },
  sepolia: {
    name: "sepolia",
    type: networkTypes.testnet,
    chainId: 11155111,
    chainSelector: 11155111,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: sepolia
  },
  lineaSepolia: {
    name: "lineaSepolia",
    type: networkTypes.testnet,
    chainId: 59141,
    chainSelector: 59141,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: lineaSepolia
  },
  bnbTestnet: {
    name: "bnbTestnet",
    type: networkTypes.testnet,
    chainId: 97,
    chainSelector: 97,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: bscTestnet
  },
  soneiumMinato: {
    name: "soneiumMinato",
    type: networkTypes.testnet,
    chainId: 1946,
    chainSelector: 1946,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: soneiumMinato
  },
  apechainCurtis: {
    name: "apechainCurtis",
    type: networkTypes.testnet,
    chainId: 33111,
    chainSelector: 33111,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: apechainCurtis
  },
  avalancheFuji: {
    name: "avalancheFuji",
    type: networkTypes.testnet,
    chainId: 43113,
    chainSelector: 43113,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: avalancheFuji
  },
  optimismSepolia: {
    name: "optimismSepolia",
    type: networkTypes.testnet,
    chainId: 11155420,
    chainSelector: 11155420,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: optimismSepolia
  },
  polygonAmoy: {
    name: "polygonAmoy",
    type: networkTypes.testnet,
    chainId: 80002,
    chainSelector: 80002,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: polygonAmoy
  },
  bitlayerTestnet: {
    name: "bitlayerTestnet",
    type: networkTypes.testnet,
    chainId: 200810,
    chainSelector: 200810,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: bitlayerTestnet
  },
  blastSepolia: {
    name: "blastSepolia",
    type: networkTypes.testnet,
    chainId: 168587773,
    chainSelector: 1685877,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: blastSepolia
  },
  botanixTestnet: {
    name: "botanixTestnet",
    type: networkTypes.testnet,
    chainId: 3636,
    chainSelector: 3636,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: botanixTestnet
  },
  celoAlfajores: {
    name: "celoAlfajores",
    type: networkTypes.testnet,
    chainId: 44787,
    chainSelector: 44787,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: celoAlfajores
  },
  coreTestnet: {
    name: "coreTestnet",
    type: networkTypes.testnet,
    chainId: 1114,
    chainSelector: 1114,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: coreTestnet
  },
  cronosTestnet: {
    name: "cronosTestnet",
    type: networkTypes.testnet,
    chainId: 338,
    chainSelector: 338,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: cronosTestnet
  },
  gnosisChiado: {
    name: "gnosisChiado",
    type: networkTypes.testnet,
    chainId: 10200,
    chainSelector: 10200,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: gnosisChiado
  },
  hashkeyTestnet: {
    name: "hashkeyTestnet",
    type: networkTypes.testnet,
    chainId: 133,
    chainSelector: 133,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: hashkeyTestnet
  },
  inkSepolia: {
    name: "inkSepolia",
    type: networkTypes.testnet,
    chainId: 763373,
    chainSelector: 763373,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: inkSepolia
  },
  mantleSepolia: {
    name: "mantleSepolia",
    type: networkTypes.testnet,
    chainId: 5003,
    chainSelector: 5003,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: mantleSepoliaTestnet
  },
  scrollSepolia: {
    name: "scrollSepolia",
    type: networkTypes.testnet,
    chainId: 534351,
    chainSelector: 534351,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: scrollSepolia
  },
  seiTestnet: {
    name: "seiTestnet",
    type: networkTypes.testnet,
    chainId: 1328,
    chainSelector: 1328,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: seiTestnet
  },
  shibariumPuppynet: {
    name: "shibariumPuppynet",
    type: networkTypes.testnet,
    chainId: 157,
    chainSelector: 157,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: shibariumTestnet
  },
  unichainSepolia: {
    name: "unichainSepolia",
    type: networkTypes.testnet,
    chainId: 1301,
    chainSelector: 1301,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: unichainSepolia
  },
  xlayerSepolia: {
    name: "xlayerSepolia",
    type: networkTypes.testnet,
    chainId: 195,
    chainSelector: 195,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: xLayerTestnet
  },
  zircuitTestnet: {
    name: "zircuitTestnet",
    type: networkTypes.testnet,
    chainId: 48899,
    chainSelector: 48899,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: zircuitTestnet
  },
  modeTestnet: {
    name: "modeTestnet",
    type: networkTypes.testnet,
    chainId: 919,
    chainSelector: 919,
    confirmations: config.DEFAULT_BLOCK_CONFIRMATIONS,
    viemChain: modeTestnet
  }
};

// src/networks/index.ts
var conceroNetworks = {
  ...testnetNetworks,
  ...mainnetNetworks
};
export {
  networkTypes,
  config,
  conceroNetworks
};

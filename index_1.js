const crypto = require("crypto");

function secureRandom() {
  // Generate a cryptographically secure random number in [0, 1)
  const buf = crypto.randomBytes(7); // 56 bits
  const high =
    (buf[0] << 16) |
    (buf[1] << 8) |
    buf[2];
  const low =
    (buf[3] << 24) |
    (buf[4] << 16) |
    (buf[5] << 8) |
    buf[6];
  // Use 53 bits: top 21 bits of high and all 32 bits of low
  const fraction =
    (((high & 0x1fffff) * 0x100000000) + (low >>> 0)) / 0x20000000000000;
  return fraction;
}

function anotherInsecurePassword() {
  // BAD: the random suffix is not  secure
  var suffix = secureRandom();
  var password = "sssAAAA" + suffix;
  return password;
}
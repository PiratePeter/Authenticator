const secretKey = document.getElementById("secret");
const token = document.getElementById("token");
let totp;

function setParams() {
  totp = new OTPAuth.TOTP({
    algorithm: "SHA1",
    digits: 6,
    period: 30,
    secret: OTPAuth.Secret.fromBase32(secretKey.value),
  });
  compute();
}

function compute() {
  token.innerHTML = totp.generate();
}

setParams(); // init
setInterval(compute, 1000); // run every second

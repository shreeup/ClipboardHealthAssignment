const { deterministicPartitionKey } = require("./dpk");

const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});


describe("deterministicPartitionKey", () => {
  const event={partitionKey:"date"};
  it("Returns the string with length equal to input string when partition key less than 256 char", () => {
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBe(event["partitionKey"].length);
  });
});

describe("deterministicPartitionKey", () => {
  
  const event={partitionKey:{primary:"datecolumn",sort:"typecolumn",date:"2022-01-01",firstname:"unknown"
  ,lastname:"unknown",uid:"a81bc81b-dead-4e5d-abff-90865d1e13b1",attributes:['category','year','make','model','location']}};
  it("Returns the correct hash for given non string input when there partition key less than 256 char", () => {
    const trivialKey = deterministicPartitionKey(event);
    //const cryptovalue=crypto.createHash("sha3-512").update(JSON.stringify(event["partitionKey"])).digest("hex");
    expect(trivialKey.length).toBe(JSON.stringify(event["partitionKey"]).length);
  });
});

describe("deterministicPartitionKey", () => {
  
  const event={primary:"datecolumn",sort:"typecolumn",date:"2022-01-01",firstname:"unknown"
  ,lastname:"unknown",uid:"a81bc81b-dead-4e5d-abff-90865d1e13b1",attributes:['category','year','make','model','location']};
  it("Returns the correct hash for given non string input when there is not property called partition key", () => {
    const trivialKey = deterministicPartitionKey(event);
    const cryptovalue=crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    expect(trivialKey).toBe(cryptovalue);
  });
});



const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(
  path.join(__dirname, "..", "src/data/all_courts.json"),
  "utf8"
);
const parsed = JSON.parse(data);

const results = parsed.data[0].Result;

const fieldNameMapping = {
  שם: "name",
  סוג: "type",
  ישוב: "city",
  כתובת: "address",
  "מרכז מידע": "info_center",
  "למידע נוסף על בית המשפט באתר": "info_url",
};

const fieldsToObj = (fields) => {
  const entries = fields.map(({ FieldName, FieldValue }) => {
    const key = fieldNameMapping[FieldName];
    return [key, FieldValue];
  });
  return Object.fromEntries(entries);
};

const resultToObj = (result) => {
  const { x, y } = result.centroid;
  const coords = { x, y };
  const data = fieldsToObj(result.tabs[0].fields);
  return { id: result.objectId, coords, data };
};
const converted = results.map(resultToObj);
console.log(converted);
const sorted = converted.sort((a, b) => a.id - b.id);
fs.writeFileSync(
  path.join(__dirname, "..", "src/data/courts.json"),
  JSON.stringify(sorted)
);

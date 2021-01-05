"use strict";

require("dotenv").config();

const axios = require("axios");
const yargs = require("yargs");
const fs = require("fs");

const { ACCESS_TOKEN, ORG_NAME, REPO_NAME } = process.env;
const { versao } = yargs.argv;

// axios
//   .get(
//     `https://api.github.com/repos/${ORG_NAME}/${REPO_NAME}/commits?access_token=${ACCESS_TOKEN}`
//   )
//   .then((res) => fs.writeFileSync("./commits.json", JSON.stringify(res.data)))
//   .then(() => {
//     console.log("teste");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const commits = require("./commits.json");

const versionCommit = commits.findIndex(({ commit }) => {
  return commit.message === versao;
});

console.log(versionCommit);

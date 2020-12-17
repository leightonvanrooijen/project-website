require("isomorphic-fetch");

let slugs = [];

function getData() {
  fetch("http://www.leightonv.co.nz:81/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
    query {
      entries {
    ... on blog_blog_Entry {
      slug
    }
  }
    }`,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      logdata(res.data);
    });
}

function logdata(data) {
  data.entries.map((entry) => {
    entry.slug ? slugs.push(entry.slug) : null;
  });
  generateSitemap();
}

require.extensions[".png"] = function () {
  return null;
};
require.extensions[".jpg"] = function () {
  return null;
};

require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./Routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  console.log(slugs);
  const pathsConfig = {
    "/blog/:id": [
      {
        id: slugs,
      },
    ],
  };
  return new Sitemap(router())
    .applyParams(pathsConfig)
    .build("http://www.leightonv.co.nz")
    .save("./public/sitemap.xml");
}

getData();

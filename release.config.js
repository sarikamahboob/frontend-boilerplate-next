const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md"
      }
    ],
    [
      '@semantic-release/git', {
        assets: ["CHANGELOG.md", "package.json", "dist/*.js", "dist/*.map"],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      },
    ],
    "@semantic-release/github"
  ]
};

module.exports = config;
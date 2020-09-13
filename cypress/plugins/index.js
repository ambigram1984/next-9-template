const { lighthouse, pa11y, prepareAudit } = require("cypress-audit")

module.exports = (on) => {
  on("before:browser:launch", (browser, launchOptions) => {
    prepareAudit(launchOptions)
  })

  on("task", {
    lighthouse: lighthouse(),
  })
}

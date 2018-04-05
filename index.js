'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const server = express();
server.use(bodyParser.urlencoded({
  extended: true
}));

server.use(bodyParser.json());

var vivekReport = [];
var matahisReport = [];


server.post("/marcedes", function (req, res) {
  var actions = req.body.result.action;
  console.log(actions)
  switch (actions) {
    case "welcome":
      var name = req.body.result.parameters.name;
      if (name == "Mathias" || name == "Vivek") {
        if (name == "Mathias" && matahisReport.length != 0) {
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `Last time you generated the report for ${matahisReportType} report. Should I generate it again? Tell me YES/NO`
                }
              }]
          });
        } else if (vivekReport.length != 0) {
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `Last time you generated the report for ${vivekReportType} report. Should I generate it again? Tell me YES/NO`
                }
              }]
          });
        } else {
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `<strong>Hi, I'm Lisa, </strong> and I'm here to assist you . Please choose one of the following topic.`,
                  "menu": [
                    {
                      "image": "assets/img/Aqua.png",
                      "title": "AQUA",
                      "description": "Advanced Quality Analysis"
                    },
                    {
                      "image": "assets/img/WBT.png",
                      "title": "WBT",
                      "description": "Web based Training"
                    },
                    {
                      "image": "assets/img/Report.png",
                      "title": "REPORT",
                      "description": "Aqua Reports"
                    },
                    {
                      "image": "assets/img/Support.png",
                      "title": "SUPPORT",
                      "description": "Find Solution"
                    }
                  ]
                }
              }]
          });
        }
      } else {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
                "sequenceId": "",
                "content": "<strong>Hi, I'm Lisa,</strong> and I'm here to assist you . Please choose one of the following topic.",
                "menu": [
                  {
                    "image": "assets/img/Aqua.png",
                    "title": "AQUA",
                    "description": "Advanced Quality Analysis"
                  },
                  {
                    "image": "assets/img/WBT.png",
                    "title": "WBT",
                    "description": "Web based Training"
                  },
                  {
                    "image": "assets/img/Report.png",
                    "title": "REPORT",
                    "description": "Aqua Reports"
                  },
                  {
                    "image": "assets/img/Support.png",
                    "title": "SUPPORT",
                    "description": "Find Solution"
                  }
                ]
              }
            }]
        });
      }
      break;
    case 'generated-report':
      var name = req.body.result.parameters.name;
      if (name == "Mathias") {
        return res.json({
          "messages": matahisReport
        });
      } else {
        return res.json({
          "messages": vivekReport
        });
      }
      break;
    case "mainmenu":
      return res.json({
        "messages": [
          {
            "type": 0,
            "speech": ""
          }, {
            "payload": {
              "sequenceId": "",
              "content": "Please choose one of the following topic.",
              "menu": [
                {
                  "image": "assets/img/Aqua.png",
                  "title": "AQUA",
                  "description": "Advanced Quality Analysis"
                },
                {
                  "image": "assets/img/WBT.png",
                  "title": "WBT",
                  "description": "Web based Training"
                },
                {
                  "image": "assets/img/Report.png",
                  "title": "REPORT",
                  "description": "Aqua Reports"
                },
                {
                  "image": "assets/img/Support.png",
                  "title": "SUPPORT",
                  "description": "Find Solution"
                }
              ]
            }
          }]

      });
      break
    case "wbt":
      var name = req.body.result.parameters.name;
      switch (name) {
        case "Lakshmi":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `<p> Welcome ${name} to WBT. In order to get access to AUQA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and befit from AQUA. Below is the list of training offered by AQUA.</p><p>I can see that you are new user If you are a new user please register yourself for the training first by clicking on the link.`,
                  "wbt": [
                    {
                      "wbtForm": {
                        "img": "assets/img/WBT.png",
                        "titel": "Registration form for web based training.",
                        "subTitle": "Register Now"
                      }
                    }
                  ]
                }
              }]
          });
          break;
        case "Rahul":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `${name} was found to have completed the WBT in a partial manner.Let’s continue from where we left off`,
                  "wbt": [
                    {
                      "wbtList": [
                        {
                          "header": "Tips Training Document",
                          "description": "TIPS training document(Workshop Users day)",
                          "link": "to the pdf >"
                        },
                        {
                          "header": "Micostatergy Online Course 9",
                          "description": "The Online course offer an indtroduction in Micostatergy Business Intelligence. the usage of Microstrategy Web..",
                          "link": "download >"
                        },
                        {
                          "header": "AQUA Tips and Tricks",
                          "description": "AQUA Tips & Tricks training document(Workshop WSUM 2015)",
                          "link": "download >"
                        },
                        {
                          "header": "Reports on Inspection",
                          "description": "The Inspection report overview offers additional information for every inspection report :- Indended use and input… ",
                          "link": "download >"
                        }
                      ]
                    }
                  ]
                }
              }]

          });
          break;
        case "Mathias":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `${name} was found to have completed the WBT. now you can access reports.`
                }
              }]
          });
          break;
        case "Vivek":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `${name} was found to have completed the WBT. now you can access reports.`
                }
              }]
          });
          break;
      }
      break;
    case "report":
      var name = req.body.result.parameters.name;
      switch (name) {
        case "Lakshmi":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""

              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `I can see that you are new user If you are a new user compete all the Web based training in order to generate report. Click on below link for WBT.`,
                  "wbt": [
                    {
                      "wbtForm": {
                        "img": "assets/img/WBT.png",
                        "titel": "Registration form for web based training.",
                        "subTitle": "Register Now"
                      }
                    }
                  ]
                }
              }]
          });
          break;
        case "Rahul":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `${name} was found to have completed the WBT in a partial manner.Let’s continue from where we left off`,
                  "wbt": [
                    {
                      "wbtList": [
                        {
                          "header": "Tips Training Document",
                          "description": "TIPS training document(Workshop Users day)",
                          "link": "to the pdf >"
                        },
                        {
                          "header": "Micostatergy Online Course 9",
                          "description": "The Online course offer an indtroduction in Micostatergy Business Intelligence. the usage of Microstrategy Web..",
                          "link": "download >"
                        },
                        {
                          "header": "AQUA Tips and Tricks",
                          "description": "AQUA Tips & Tricks training document(Workshop WSUM 2015)",
                          "link": "download >"
                        },
                        {
                          "header": "Reports on Inspection",
                          "description": "The Inspection report overview offers additional information for every inspection report :- Indended use and input… ",
                          "link": "download >"
                        }
                      ]
                    }
                  ]
                }

              }]

          });
          break;
        case "Mathias":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": "AQUA offers a rich set for reports in the form of Standard and Custom reports for the End users. Please choose you intended report to see from the below list.",
                  "report": [
                    {
                      "reportList": [
                        {
                          "image": "assets/img/PR.png",
                          "bg": "assets/img/blue.png",
                          "header": "Product Reliability",
                          "description": "The W&G report overview offers additional information for every product reliability report :- Intended use - Lin…",
                          "link": "to the wiki >"
                        },
                        {
                          "image": "assets/img/DR.png",
                          "bg": "assets/img/orange.png",
                          "header": "Diagnostic Reliability",
                          "description": "The Diagnosis report overview offers additional information for every diagnostic reliability report :- Indended us… ",
                          "link": "to the link >"
                        },
                        {
                          "image": "assets/img/ffv-t.png",
                          "bg": "assets/img/purple.png",
                          "header": "FFV-T",
                          "description": "The FFV-T report overview offers additional information for every FFV-T report :-Indended use and input parameter… ",
                          "link": "to the link >"
                        },
                        {
                          "image": "assets/img/inspection.png",
                          "bg": "assets/img/green.png",
                          "header": "Reports on Inspection",
                          "description": "The Inspection report overview offers additional information for every inspection report :- Indended use and input… ",
                          "link": "to the link >"
                        }
                      ]
                    }
                  ]
                }
              }]

          });
          break;
        case "Vivek":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": "AQUA offers a rich set for reports in the form of Standard and Custom reports for the End users. Please choose you intended report to see from the below list.",
                  "report": [
                    {
                      "reportList": [
                        {
                          "image": "assets/img/PR.png",
                          "bg": "assets/img/blue.png",
                          "header": "Product Reliability",
                          "description": "The W&G report overview offers additional information for every product reliability report :- Intended use - Lin…",
                          "link": "to the wiki >"
                        },
                        {
                          "image": "assets/img/DR.png",
                          "bg": "assets/img/orange.png",
                          "header": "Diagnostic Reliability",
                          "description": "The Diagnosis report overview offers additional information for every diagnostic reliability report :- Indended us… ",
                          "link": "to the link >"
                        },
                        {
                          "image": "assets/img/ffv-t.png",
                          "bg": "assets/img/purple.png",
                          "header": "FFV-T",
                          "description": "The FFV-T report overview offers additional information for every FFV-T report :-Indended use and input parameter… ",
                          "link": "to the link >"
                        },
                        {
                          "image": "assets/img/inspection.png",
                          "bg": "assets/img/green.png",
                          "header": "Reports on Inspection",
                          "description": "The Inspection report overview offers additional information for every inspection report :- Indended use and input… ",
                          "link": "to the link >"
                        }
                      ]
                    }
                  ]
                }
              }]

          });
          break;

      }
      break;

    case "training-info":
      var name = req.body.result.parameters.name;
      if (name != "Mathias" || name != "Vivek") {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
                "sequenceId": "",
                "content": "Opens the PDF link for the document. ",
                "wbt": [
                  {
                    "wbtForm": {
                      "img": "assets/img/pdf.png",
                      "titel": "Tips training.pdf",
                      "subTitle": "Open"
                    }
                  }
                ]
              }
            }]
        });
      } else {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
                "sequenceId": "",
                "content": `${name} was found to have completed the WBT. now you can access reports.`
              }
            }]
        });
      }
      break;
    case 'report-category':
      var name = req.body.result.parameters.name;
      if (name == "Mathias" || name == "Vivek") {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
                "sequenceId": "",
                "content": "Please choose one of the following Product Reliability category.",
                "report": [
                  {
                    "category": {
                      "title": "Product Reliability",
                      "list": [
                        {
                          "title": "Quality reports",
                          "subCategory": [
                            "P1A",
                            "P1D"
                          ]
                        },
                        {
                          "title": "Hit lists",
                          "subCategory": [
                            "P1B",
                            "P1C"
                          ]
                        },
                        {
                          "title": "Distributions",
                          "subCategory": [
                            "P1C1",
                            "P1E"
                          ]
                        },
                        {
                          "title": "Production reports",
                          "subCategory": [
                            "P1F",
                            "P1G"
                          ]
                        },
                        {
                          "title": "Audit reports",
                          "subCategory": [
                            "P1G1",
                            "P1H"
                          ]
                        },
                        {
                          "title": "Special reports",
                          "subCategory": [
                            "P1I",
                            "P1J"
                          ]
                        },
                        {
                          "title": "Early warning system",
                          "subCategory": [
                            "P1K",
                            "P1L"
                          ]
                        },
                        {
                          "title": "Extrapolation",
                          "subCategory": [
                            "P1M",
                            "P1N"
                          ]
                        },
                        {
                          "title": "Other reports",
                          "subCategory": [
                            "P1O",
                            "P1P"
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            }]
        });
      } else if (name == "Lakshmi") {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""

            }, {
              "payload": {
                "sequenceId": "",
                "content": `I can see that you are new user If you are a new use compete all the Web based training in order to generate report. Click on below link for WBT.`,
                "wbt": [
                  {
                    "wbtForm": {
                      "img": "assets/img/WBT.png",
                      "titel": "Registration form for web based training.",
                      "subTitle": "Register Now"
                    }
                  }
                ]
              }
            }]
        });
      } else {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
                "sequenceId": "",
                "content": `${name} was found to have completed the WBT in a partial manner.Let’s continue from where we left off`,
                "wbt": [
                  {
                    "wbtList": [
                      {
                        "header": "Tips Training Document",
                        "description": "TIPS training document(Workshop Users day)",
                        "link": "to the pdf >"
                      },
                      {
                        "header": "Micostatergy Online Course 9",
                        "description": "The Online course offer an indtroduction in Micostatergy Business Intelligence. the usage of Microstrategy Web..",
                        "link": "download >"
                      },
                      {
                        "header": "AQUA Tips and Tricks",
                        "description": "AQUA Tips & Tricks training document(Workshop WSUM 2015)",
                        "link": "download >"
                      },
                      {
                        "header": "Reports on Inspection",
                        "description": "The Inspection report overview offers additional information for every inspection report :- Indended use and input… ",
                        "link": "download >"
                      }
                    ]
                  }
                ]
              }

            }]

        });
      }
      break;
    case 'report-category-detail':
      var name = req.body.result.parameters.name;
      var brand = req.body.result.contexts[0].parameters.report - name.original;
      var branch = req.body.result.contexts[0].parameters.report - name1.original;
      var series = req.body.result.contexts[0].parameters.report - name2.original;
      var vehicletype = req.body.result.contexts[0].parameters.vehicle - type.original;
      var manufactureCode = req.body.result.contexts[0].parameters.report - name3.original;

      if (name == "Mathias") {
       var matahisReportType = req.body.result.parameters.any;
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""

            }, {
              "payload": {
                "content": `${matahisReportType} Report is generated based on following information. Now you can download.`,
                "report": [
                  {
                    "reportLink":""
                  }
                ]
              }
            }]
        });
      } else if (name == "Vivek") {
       var vivekReportType = req.body.result.parameters.any;
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""

            }, {
              "payload": {
                "content": `${vivekReportType} Report is generated based on following information. Now you can download.`,
                "report": [
                  {
                    "reportLink":""
                  }
                ]
              }
            }]
        });
      }
      else {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""

            }, {
              "payload": {
                "sequenceId": "",
                "content": `I can see that you are new user If you are a new use compete all the Web based training in order to generate report. Click on below link for WBT.`,
                "wbt": [
                  {
                    "wbtForm": {
                      "img": "assets/img/WBT.png",
                      "titel": "Registration form for web based training.",
                      "subTitle": "Register Now"
                    }
                  }
                ]
              }
            }]
        });
      }
      break;
    case "default-fallback":
      return res.json({
        "messages": [
          {
            "type": 0,
            "speech": ""
          }, {
            "payload": {
              "sequenceId": "",
              "content": "Sorry, I don't  understand your question.Let’s take you to the main menu",
              "menu": [
                {
                  "image": "assets/img/Aqua.png",
                  "title": "AQUA",
                  "description": "Advanced Quality Analysis"
                },
                {
                  "image": "assets/img/WBT.png",
                  "title": "WBT",
                  "description": "Web based Training"
                },
                {
                  "image": "assets/img/Report.png",
                  "title": "REPORT",
                  "description": "Aqua Reports"
                },
                {
                  "image": "assets/img/Support.png",
                  "title": "SUPPORT",
                  "description": "Find Solution"
                }
              ]
            }
          }]
      });
      break;
  }
});

server.listen((process.env.PORT || 8000), function () {
  console.log("Server is up and running...");
});
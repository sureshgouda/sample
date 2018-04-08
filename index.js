'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const server = express();
server.use(bodyParser.urlencoded({
  extended: true
}));

server.use(bodyParser.json());

var NicoleReport = [];
var matahisReport = [];
var matahisReportType;
var NicoleReportType;

server.post("/marcedes", function (req, res) {
  var actions = req.body.result.action;
  console.log(actions)
  switch (actions) {
    case "welcome":
      var name = req.body.result.parameters.name;
      if (name == "Rahul" || name == "Nicole") {
        if (name == "Rahul" && matahisReport.length != 0) {
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "003",
                  "content": `Last time you generated the report for ${matahisReportType} report. Should I generate it again? Tell me YES/NO`
                }
              }]
          });
        } else if (NicoleReport.length != 0) {
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "003",
                  "content": `Last time you generated the report for ${NicoleReportType} report. Should I generate it again? Tell me YES/NO`
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
                  "sequenceId": "003",
                  "content": "Hi, Welcome to AQUA. I'm Lisa, I'm here to assist you. How may I help you?"
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
                "sequenceId": "003",
                "content": "Hi, Welcome to AQUA. I'm Lisa, I'm here to assist you. How may I help you?"
    
              }
            }]
        });
      }
      break;
    case 'generated-report':
      var name = req.body.result.parameters.name;
      if (name == "Rahul") {
        return res.json({
          "messages": matahisReport
        });
      } else {
        return res.json({
          "messages": NicoleReport
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
              "content": "Here are some Frequently Asked Questions. You may select one from the list.",
              "menu": [
                {
                  "image": "assets/img/Reportnew .png",
                  "title": "AQUA",
                  "description": "Advanced Quality Analysis"
                },
                {
                  "image": "assets/img/wbt_icon.png",
                  "title": "WBT",
                  "description": "Web based Training"
                },
                {
                  "image": "assets/img/Reportnew .png",
                  "title": "REPORT",
                  "description": "Aqua Reports"
                },
                {
                  "image": "assets/img/Reportnew .png",
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
                  "content": `<p> Welcome ${name} to WBT. In order to get access to AQUA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn from AQUA.</p><p>I can see that you are new user please register yourself for the training first by clicking on the link.`,
                  "wbt": [
                    {
                      "wbtForm": {
                        "img": "assets/img/wbt_icon.png",
                        "titel": "Registration form for web based training.",
                        "subTitle": "Register Now",
                        "link":"https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
                      }
                    }
                  ]
                }
              }]
          });
          break;
        case "Nitin":
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
                          "link": "to the pdf >",
                          "linkRef":"assets/TIPS-AQUA-Anwendertag-EN.pdf"
                        },
                        {
                          "header": "Micostatergy Online Course 9",
                          "description": "The Online course offer an indtroduction in Micostatergy Business Intelligence. the usage of Microstrategy Web..",
                          "link": "to the link >",
                          "linkRef":"http://aqua.intra.corpintra.net/downloads/BICC/Einfuehrung/WBT_MSTR9/03_wbt_09_00_en/WEBRA-WEBPRO/MSTR_launch.html"
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
        case "Rahul":
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
        case "Nicole":
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
                  "sequenceId": "117",
                  "content": `<p> Welcome ${name} to WBT. In order to get access to AQUA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn from AQUA.</p><p>I can see that you are new user please register yourself for the training first by clicking on the link.`,
                  "wbt": [
                    {
                      "wbtForm": {
                        "img": "assets/img/wbt_icon.png",
                        "titel": "Registration form for web based training.",
                        "subTitle": "Register Now",
                        "link":"https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
                      }
                    }
                  ]
                }
              }]
          });
          break;
        case "Nitin":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `I’m sorry ${name} It looks as if you haven’t completed the WBT yet. Completion of WBT is mandatory as to access the reports. Do you want me to take you to the WBT section?`
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
                  "sequenceId": "105",
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
        case "Nicole":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "105",
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
      if (name != "Rahul" || name != "Nicole") {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
                "sequenceId": "109",
                "wbt": [
                  {
                    "content": "Opens the PDF link for the document.",
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
      if (name == "Rahul" || name == "Nicole") {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
                "sequenceId": "106",
                "content": "Please choose one of the following Product Reliability category.",
                "report": [
                  {
                    "category": {
                      "title": "Product Reliability",
                      "list": [
                        {
                          "title": "Quality reports",
                          "subCategory": [
                            {
                              "type": "P1A",
                              "tooltipContent": "Complaints per month of production "
                            },
                            {
                              "type": "P1D",
                              "tooltipContent": "Complaints per month of production by distance"
                            }
                          ]
                        },
                        {
                          "title": "Hit lists",
                          "subCategory": [
                            {
                              "type": "P1B",
                              "tooltipContent": "one"
                            },
                            {
                              "type": "P1C",
                              "tooltipContent": "two"
                            }
                          ]
                        },
                        {
                          "title": "Distributions",
                          "subCategory": [
                            {
                              "type": "P1C1",
                              "tooltipContent": "one"
                            },
                            {
                              "type": "P1E",
                              "tooltipContent": "two"
                            }
                          ]
                        },
                        {
                          "title": "Production reports",
                          "subCategory": [
                            {
                              "type": "P1F",
                              "tooltipContent": "one"
                            },
                            {
                              "type": "P1G",
                              "tooltipContent": "two"
                            }
                          ]
                        },
                        {
                          "title": "Audit reports",
                          "subCategory": [
                            {
                              "type": "P1G1",
                              "tooltipContent": "one"
                            },
                            {
                              "type": "P1H",
                              "tooltipContent": "two"
                            }
                          ]
                        },
                        {
                          "title": "Special reports",
                          "subCategory": [
                            {
                              "type": "P1I",
                              "tooltipContent": "one"
                            },
                            {
                              "type": "P1J",
                              "tooltipContent": "two"
                            }
                          ]
                        },
                        {
                          "title": "Early warning system",
                          "subCategory": [
                            {
                              "type": "P1K",
                              "tooltipContent": "one"
                            },
                            {
                              "type": "P1L",
                              "tooltipContent": "two"
                            }
                          ]
                        },
                        {
                          "title": "Extrapolation",
                          "subCategory": [
                            {
                              "type": "P1M",
                              "tooltipContent": "one"
                            },
                            {
                              "type": "P1N",
                              "tooltipContent": "two"
                            }
                          ]
                        },
                        {
                          "title": "Other reports",
                          "subCategory": [
                            {
                              "type": "P1O",
                              "tooltipContent": "one"
                            },
                            {
                              "type": "P1P",
                              "tooltipContent": "two"
                            }
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
                "sequenceId": "117",
                "content": `I can see that you are new user If you are a new use compete all the Web based training in order to generate report. Click on below link for WBT.`,
                "wbt": [
                  {
                    "wbtForm": {
                      "img": "assets/img/wbt_icon.png",
                      "titel": "Registration form for web based training.",
                      "subTitle": "Register Now",
                      "link":"https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
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
      if (name == "Rahul") {
        matahisReportType = req.body.result.parameters.any;
        var reportLink ;
        if(matahisReportType == 'P1A'){
          reportLink = "assets/P1A 20180316044508632.xlsx";
        }else{
          reportLink = "assets/P1D 20180316045237963.xlsx";
        }
       var report = [
        {
          "type": 0,
          "speech": ""

        }, {
          "payload": {
            "content": `Here is the report that you have requested`,
            "report": [
              {
                "reportLink":`${reportLink}`
              }
            ]
          }
        }];
        matahisReport = report;
        return res.json({
          "messages": report
        });
      } else if (name == "Nicole") {
       NicoleReportType = req.body.result.parameters.any;
       var reportLink ;
       if(NicoleReportType == 'P1A'){
         reportLink = "assets/P1A 20180316044508632.xlsx";
       }else{
         reportLink = "assets/P1D 20180316045237963.xlsx";
       }
       var report = [
        {
          "type": 0,
          "speech": ""

        }, {
          "payload": {
            "content": `Here is the report that you have requested`,
            "report": [
              {
                "reportLink":`${reportLink}`
              }
            ]
          }
        }];
        NicoleReport = report;
        return res.json({
          "messages": report
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
                "sequenceId": "117",
                "content": `<p> Welcome ${name} to WBT. In order to get access to AQUA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn from AQUA.</p><p>I can see that you are new user please register yourself for the training first by clicking on the link.`,
                "wbt": [
                  {
                    "wbtForm": {
                      "img": "assets/img/wbt_icon.png",
                      "titel": "Registration form for web based training.",
                      "subTitle": "Register Now",
                      "link":"https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
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
              "sequenceId": "118",
              "content": "Sorry, I don't  understand your question.Let me take you to the main menu.",
              "menu": [
                {
                  "image": "assets/img/Reportnew .png",
                  "title": "AQUA",
                  "description": "Advanced Quality Analysis"
                },
                {
                  "image": "assets/img/wbt_icon.png",
                  "title": "WBT",
                  "description": "Web based Training"
                },
                {
                  "image": "assets/img/Reportnew .png",
                  "title": "REPORT",
                  "description": "Aqua Reports"
                },
                {
                  "image": "assets/img/Reportnew .png",
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
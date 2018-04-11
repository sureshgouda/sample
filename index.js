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
      if (name == "Ralph" || name == "Nicole") {
        if (name == "Ralph" && matahisReport.length != 0) {
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "003",
                  "content": `Hello ${name}, Last time you generated the report for ${matahisReportType}. Should I generate it again? YES or NO`
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
                  "content": `Hello ${name}, Last time you generated the report for ${NicoleReportType}. Should I generate it again? YES or NO`
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
      if (name == "Ralph") {
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
              "sequenceId": "102",
              "content": "Kindly select one from the list.",
              "menu": [
                {
                  "image": "assets/img/aqua_icon.png",
                  "title": "AQUA",
                  "description": "Advanced Quality Analysis",
                  "user": "What is AQUA?"
                },
                {
                  "image": "assets/img/wbt_icon.png",
                  "title": "WBT",
                  "description": "Web based Training",
                  "user": "Could you take me to the WBT section?"
                },
                {
                  "image": "assets/img/report_icon.png",
                  "title": "REPORT",
                  "description": "Aqua Reports",
                  "user": "Could you take me to the Reports section?"
                },
                {
                  "image": "assets/img/support_icon.png",
                  "title": "SUPPORT",
                  "description": "Find Solution",
                  "user": "Could you take me to the Support section?"
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
                  "content": `Welcome ${name}, to WBT. In order to get access to AQUA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and benefit from AQUA. Below is the list of training offered by AQUA.`,
                  "wbt": [
                    {
                      "wbtForm": {
                        "img": "assets/img/wbt_icon.png",
                        "titel": "Registration form for web based training.",
                        "subTitle": "Register Now",
                        "link": "https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
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
                  "content": `Let’s continue from where we left off.`,
                  "wbt": [
                    {
                      "wbtList": [
                        {
                          "header": "Tips Training Document",
                          "description": "TIPS training document(Workshop Users day)",
                          "link": "to the pdf >",
                          "linkRef": "assets/TIPS-AQUA-Anwendertag-EN.pdf"
                        },
                        {
                          "header": "Micostatergy Online Course 9",
                          "description": "The Online course offer an introduction in Micostatergy Business Intelligence. The usage of Microstrategy Web..",
                          "link": "to the link >",
                          "linkRef": "http://aqua.intra.corpintra.net/downloads/BICC/Einfuehrung/WBT_MSTR9/03_wbt_09_00_en/WEBRA-WEBPRO/MSTR_launch.html"
                        },
                        {
                          "header": "AQUA Tips and Tricks",
                          "description": "AQUA Tips & Tricks training document(Workshop WSUM 2015)",
                          "link": "download >"
                        },
                        {
                          "header": "Reports on Inspection",
                          "description": "The Inspection report overview offers additional information for every inspection report :- Intended use and input… ",
                          "link": "download >"
                        }
                      ]
                    }
                  ]
                }
              }]

          });
          break;
        case "Ralph":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "",
                  "content": `${name} you have already completed the WBT. Would you like to access Reports?`
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
                  "content": `${name} you have already completed the WBT. Would you like to access Reports?`
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
                  "content": `<p> Welcome ${name} to WBT. In order to get access to reports, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and benefit from AQUA. Below is the list of training offered by AQUA.</p.`,
                  "wbt": [
                    {
                      "wbtForm": {
                        "img": "assets/img/wbt_icon.png",
                        "titel": "Registration form for web based training.",
                        "subTitle": "Register Now",
                        "link": "https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
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
        case "Ralph":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "105",
                  "content": " AQUA offers a rich set for reports in the form of Standard and Custom reports for the End users. Please select your intended report from the below list.",
                  "report": [
                    {
                      "reportList": [
                        {
                          "image": "assets/img/PR.png",
                          "bg": "assets/img/blue.png",
                          "header": "Product Reliability",
                          "description": "The W&G report overview offers additional information for every product reliability report :- Intended use - Lin…",
                          "link": "to the wiki >",
                          "user": "Could you give me Product Reliability report? "
                        },
                        {
                          "image": "assets/img/DR.png",
                          "bg": "assets/img/orange.png",
                          "header": "Diagnostic Reliability",
                          "description": "The Diagnosis report overview offers additional information for every diagnostic reliability report :- Indended us… ",
                          "link": "to the link >",
                          "user": "Could you give me Diagnostic Reliability report? "
                        },
                        {
                          "image": "assets/img/ffv-t.png",
                          "bg": "assets/img/purple.png",
                          "header": "FFV-T",
                          "description": "The FFV-T report overview offers additional information for every FFV-T report :-Indended use and input parameter… ",
                          "link": "to the link >",
                          "user": "Could you give me FFV-T report? "
                        },
                        {
                          "image": "assets/img/inspection.png",
                          "bg": "assets/img/green.png",
                          "header": "Reports on Inspection",
                          "description": "The Inspection report overview offers additional information for every inspection report :- Indended use and input… ",
                          "link": "to the link >",
                          "user": "Could you give me Inspection report? "
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
                  "content": " AQUA offers a rich set for reports in the form of Standard and Custom reports for the End users. Please select your intended report from the below list.",
                  "report": [
                    {
                      "reportList": [
                        {
                          "image": "assets/img/PR.png",
                          "bg": "assets/img/blue.png",
                          "header": "Product Reliability",
                          "description": "The W&G report overview offers additional information for every product reliability report :- Intended use - Lin…",
                          "link": "to the wiki >",
                          "user": "Could you give me Product Reliability report? "
                        },
                        {
                          "image": "assets/img/DR.png",
                          "bg": "assets/img/orange.png",
                          "header": "Diagnostic Reliability",
                          "description": "The Diagnosis report overview offers additional information for every diagnostic reliability report :- Indended us… ",
                          "link": "to the link >",
                          "user": "Could you give me Diagnostic Reliability report? "
                        },
                        {
                          "image": "assets/img/ffv-t.png",
                          "bg": "assets/img/purple.png",
                          "header": "FFV-T",
                          "description": "The FFV-T report overview offers additional information for every FFV-T report :-Indended use and input parameter… ",
                          "link": "to the link >",
                          "user": "Could you give me FFV-T report? "
                        },
                        {
                          "image": "assets/img/inspection.png",
                          "bg": "assets/img/green.png",
                          "header": "Reports on Inspection",
                          "description": "The Inspection report overview offers additional information for every inspection report :- Indended use and input… ",
                          "link": "to the link >",
                          "user": "Could you give me Inspection report? "
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
      if (name != "Ralph" || name != "Nicole") {
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
                    "content": "Download the Tips Training Document from here :",
                    "wbtForm": {
                      "img": "assets/img/pdf.png",
                      "titel": "Tips training.pdf",
                      "subTitle": "Open",
                      "link": "assets/TIPS-AQUA-Anwendertag-EN.pdf"
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
      if (name == "Ralph" || name == "Nicole") {
        return res.json({
          "messages": [
            {
              "type": 0,
              "speech": ""
            }, {
              "payload": {
                "sequenceId": "106",
                "content": "Please choose one of the following Product Reliability categories.",
                "report": [
                  {
                    "category": {
                      "title": "Product Reliability",
                      "user": "Could you give me Product Reliability report?",
                      "list": [
                        {
                          "title": "Quality reports",
                          "subCategory": [
                            {
                              "type": "P1A - Complaints per month of production (Q11)",
                              "tooltipContent": "Shows the number of vehicles produced, as well as the number of complaints, number of vehicles complained of within a certain production period.",
                              "user": "could you give me P1A report information?"
                            },
                            {
                              "type": "P1D - Complaints per production month after operating time (Q21)",
                              "tooltipContent": "Usage Presentation of the number of damages claimed, broken down into the months of production, given for vehicles of the same operating time.",
                              "user": "could you give me  P1D report information?"
                            }
                          ]
                        },
                        {
                          "title": "Hit lists",
                          "subCategory": [
                            {
                              "type": "P1B",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1B report information?"
                            },
                            {
                              "type": "P1C",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1C report information?"
                            }
                          ]
                        },
                        {
                          "title": "Distributions",
                          "subCategory": [
                            {
                              "type": "P1C1",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1C1 report information?"
                            },
                            {
                              "type": "P1E",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1E report information?"
                            }
                          ]
                        },
                        {
                          "title": "Production reports",
                          "subCategory": [
                            {
                              "type": "P1F",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1F report information?"
                            },
                            {
                              "type": "P1G",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1G report information?"
                            }
                          ]
                        },
                        {
                          "title": "Audit reports",
                          "subCategory": [
                            {
                              "type": "P1G1",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1G1 report information?"
                            },
                            {
                              "type": "P1H",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1H report information?"
                            }
                          ]
                        },
                        {
                          "title": "Special reports",
                          "subCategory": [
                            {
                              "type": "P1I",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1I report information?"
                            },
                            {
                              "type": "P1J",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1J report information?"
                            }
                          ]
                        },
                        {
                          "title": "Early warning system",
                          "subCategory": [
                            {
                              "type": "P1K",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1K report information?"
                            },
                            {
                              "type": "P1L",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1L report information?"
                            }
                          ]
                        },
                        {
                          "title": "Extrapolation",
                          "subCategory": [
                            {
                              "type": "P1M",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1M report information?"
                            },
                            {
                              "type": "P1N",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1N report information?"
                            }
                          ]
                        },
                        {
                          "title": "Other reports",
                          "subCategory": [
                            {
                              "type": "P1O",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1O report information?"
                            },
                            {
                              "type": "P1P",
                              "tooltipContent": "Sorry, this report is not available for access at the moment. Please try after sometime.",
                              "user": "could you give me  P1P report information?"
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
                "sequenceId": "",
                "content": `Hello ${name}, In order to get access to reports, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and benefit from AQUA. Below is the list of training offered by AQUA.`,
                "wbt": [
                  {
                    "wbtForm": {
                      "img": "assets/img/WBT.png",
                      "titel": "Registration form for web based training.",
                      "subTitle": "Register Now",
                      "link": "https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
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
                "content": `Let’s continue from where we left off.`,
                "wbt": [
                  {
                    "wbtList": [
                      {
                        "header": "Tips Training Document",
                        "description": "TIPS training document(Workshop Users day)",
                        "link": "to the pdf >",
                        "linkRef": "assets/TIPS-AQUA-Anwendertag-EN.pdf"
                      },
                      {
                        "header": "Micostatergy Online Course 9",
                        "description": "The Online course offer an introduction in Micostatergy Business Intelligence. The usage of Microstrategy Web..",
                        "link": "to the link >",
                        "linkRef": "http://aqua.intra.corpintra.net/downloads/BICC/Einfuehrung/WBT_MSTR9/03_wbt_09_00_en/WEBRA-WEBPRO/MSTR_launch.html"
                      },
                      {
                        "header": "AQUA Tips and Tricks",
                        "description": "AQUA Tips & Tricks training document(Workshop WSUM 2015)",
                        "link": "download >"
                      },
                      {
                        "header": "Reports on Inspection",
                        "description": "The Inspection report overview offers additional information for every inspection report :- Intended use and input… ",
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
      if (name == "Ralph") {
        matahisReportType = req.body.result.parameters.any;
        var reportLink;
        if (matahisReportType == 'P1A') {
          reportLink = "assets/P1A 20180316044508632.xlsx";
        } else {
          reportLink = "assets/P1D 20180316045237963.xlsx";
        }
        var report = [
          {
            "type": 0,
            "speech": ""

          }, {
            "payload": {
              "sequenceId": "",
              "content": `${matahisReportType} report is generated based on the following Vehicle Attributes. Please download the report`,
              "report": [
                {
                  "reportLink": `${reportLink}`
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
        var reportLink;
        if (NicoleReportType == 'P1A') {
          reportLink = "assets/P1A 20180316044508632.xlsx";
        } else {
          reportLink = "assets/P1D 20180316045237963.xlsx";
        }
        var report = [
          {
            "type": 0,
            "speech": ""

          }, {
            "payload": {
              "sequenceId": "",
              "content": `${NicoleReportType} report is generated based on the following Vehicle Attributes. Please download the report`,
              "report": [
                {
                  "reportLink": `${reportLink}`
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
                "sequenceId": "",
                "content": `Welcome ${name} to WBT. In order to get access to AQUA, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and benefit from AQUA. Below is the list of training offered by AQUA.`,
                "wbt": [
                  {
                    "wbtForm": {
                      "img": "assets/img/wbt_icon.png",
                      "titel": "Registration form for web based training.",
                      "subTitle": "Register Now",
                      "link": "https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
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
                  "image": "assets/img/aqua_icon.png",
                  "title": "AQUA",
                  "description": "Advanced Quality Analysis",
                  "user": "What is AQUA?"
                },
                {
                  "image": "assets/img/wbt_icon.png",
                  "title": "WBT",
                  "description": "Web based Training",
                  "user": "Could you take me to the WBT section?"
                },
                {
                  "image": "assets/img/report_icon.png",
                  "title": "REPORT",
                  "description": "Aqua Reports",
                  "user": "Could you take me to the Reports section?"
                },
                {
                  "image": "assets/img/support_icon.png",
                  "title": "SUPPORT",
                  "description": "Find Solution",
                  "user": "Could you take me to the Support section?"
                }
              ]
            }
          }]
      });
      break;

    case 'direct-report':
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
                  "content": `Welcome ${name}, to WBT. In order to get access to report, AQUA (WBT) Web based training must be performed. AQUA offers a rich WBT set for the user to learn and benefit from AQUA. Below is the list of training offered by AQUA.`,
                  "wbt": [
                    {
                      "wbtForm": {
                        "img": "assets/img/wbt_icon.png",
                        "titel": "Registration form for web based training.",
                        "subTitle": "Register Now",
                        "link": "https://cism-web.es.corpintra.net/cgi-bin/webTickets/webTicket.pl?t=AQUA_T1_DE_WBT_Anmeldung"
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
                  "content": `I’m sorry ${name}, It looks as if you haven’t completed the WBT yet. Completion of WBT is mandatory as to access the reports. Do you want me to take you to the WBT section?`
                }

              }]

          });
          break;
        case "Ralph":
          return res.json({
            "messages": [
              {
                "type": 0,
                "speech": ""
              }, {
                "payload": {
                  "sequenceId": "107",
                  "content": "Please select one of the following attributes to generate the report",
                  "report": [
                    {
                      "title": "Attributes",
                      "user": "Vehicle attribute",
                      "attributes": [
                        "Vehicle",
                        "Engine",
                        "Axel"
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
                  "sequenceId": "107",
                  "content": "Please select one of the following attributes to generate the report",
                  "report": [
                    {
                      "title": "Attributes",
                      "user": "Vehicle attribute",
                      "attributes": [
                        "Vehicle",
                        "Engine",
                        "Axel"
                      ]
                    }
                  ]
                }
              }]

          });
          break;

      }
      break;
  }
});

server.listen((process.env.PORT || 8000), function () {
  console.log("Server is up and running...");
});




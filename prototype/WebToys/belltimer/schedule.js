  
Date.prototype.getDOY = function() {
  var onejan = new Date(this.getFullYear(),0,1);
  return Math.ceil((this - onejan) / 86400000);
}

  
  halfday_schedule = [
            {
              "Title":"Before School",
              "Start":{"h":0,"m":0},
              "End":{"h":7,"m":20}
            },{
              "Title":"A Period",
              "Start":{"h":7,"m":20},
              "End":{"h":7,"m":47}
            },{
              "Title":"Passing",
              "Start":{"h":7,"m":47},
              "End":{"h":7,"m":51}
            },{
              "Title":"B Period",
              "Start":{"h":7,"m":51},
              "End":{"h":8,"m":18}
            },{
              "Title":"Passing",
              "Start":{"h":8,"m":18},
              "End":{"h":8,"m":22}
            },{
              "Title":"C Period",
              "Start":{"h":8,"m":22},
              "End":{"h":8,"m":49}
            },{
              "Title":"Passing",
              "Start":{"h":8,"m":49},
              "End":{"h":8,"m":53}
            },{
              "Title":"D Period",
              "Start":{"h":8,"m":53},
              "End":{"h":9,"m":20}
            },{
              "Title":"Passing",
              "Start":{"h":9,"m":20},
              "End":{"h":9,"m":24}
            },{
              "Title":"E Period",
              "Start":{"h":9,"m":24},
              "End":{"h":9,"m":51}
            },{
              "Title":"Passing",
              "Start":{"h":9,"m":51},
              "End":{"h":9,"m":55}
            },{
              "Title":"F Period",
              "Start":{"h":9,"m":55},
              "End":{"h":10,"m":22}
            },{
              "Title":"Passing",
              "Start":{"h":10,"m":22},
              "End":{"h":10,"m":26}
            },{
              "Title":"G Period",
              "Start":{"h":10,"m":26},
              "End":{"h":10,"m":55}
            },{
              "Title":"After School",
              "Start":{"h":10,"m":55},
              "End":{"h":24,"m":0}
            }
          ];
  noschoolday_schedule = [{"Title":"Sleeping","Start":{"h":0,"m":0},"End":{"h":11,"m":40}},{"Title":"Eating","Start":{"h":11,"m":40},"End":{"h":12,"m":20}},{"Title":"Sleeping","Start":{"h":12,"m":20},"End":{"h":24,"m":0}}];
  
  twohourdelay_schedule = [{"Title":"Before School","Start":{"h":0,"m":0},"End":{"h":9,"m":20}},{"Title":"A Period","Start":{"h":9,"m":20},"End":{"h":9,"m":49}},{"Title":"Passing","Start":{"h":9,"m":49},"End":{"h":9,"m":53}},{"Title":"B Period","Start":{"h":9,"m":53},"End":{"h":10,"m":22}},{"Title":"Passing","Start":{"h":10,"m":22},"End":{"h":10,"m":26}},{"Title":"C Period","Start":{"h":10,"m":26},"End":{"h":10,"m":55}},{"Title":"Passing","Start":{"h":10,"m":55},"End":{"h":11,"m":4}},{"Title":"D Period","Start":{"h":11,"m":4},"End":{"h":11,"m":28}},{"Title":"Passing","Start":{"h":11,"m":28},"End":{"h":11,"m":32}},{"Title":"E Period (1st Lunch)","Start":{"h":11,"m":32},"End":{"h":11,"m":57}},{"Title":"E Period (Lunch Passing)","Start":{"h":11,"m":57},"End":{"h":12,"m":0}},{"Title":"E Period (2nd Lunch)","Start":{"h":12,"m":0},"End":{"h":12,"m":25}},{"Title":"E Period (Lunch Passing)","Start":{"h":12,"m":25},"End":{"h":12,"m":28}},{"Title":"E Period (3rd Lunch)","Start":{"h":12,"m":28},"End":{"h":12,"m":53}},{"Title":"Passing","Start":{"h":12,"m":53},"End":{"h":12,"m":57}},{"Title":"F Period","Start":{"h":12,"m":57},"End":{"h":13,"m":26}},{"Title":"Passing","Start":{"h":13,"m":26},"End":{"h":13,"m":30}},{"Title":"G Period","Start":{"h":13,"m":30},"End":{"h":14,"m":0}},{"Title":"After School","Start":{"h":14,"m":0},"End":{"h":24,"m":0}}];
    
  AC_FinalSchedule = [{"Title":"Before School","Start":{"h":0,"m":0},"End":{"h":7,"m":20}},{"Title":"A Period (FINAL!!)","Start":{"h":7,"m":20},"End":{"h":8,"m":52}},{"Title":"Passing","Start":{"h":8,"m":52},"End":{"h":8,"m":56}},{"Title":"B Period","Start":{"h":8,"m":56},"End":{"h":9,"m":24}},{"Title":"Passing","Start":{"h":9,"m":24},"End":{"h":9,"m":28}},{"Title":"C Period (FINAL!!)","Start":{"h":9,"m":28},"End":{"h":10,"m":59}},{"Title":"Passing","Start":{"h":10,"m":59},"End":{"h":11,"m":3}},{"Title":"D Period","Start":{"h":11,"m":3},"End":{"h":11,"m":31}},{"Title":"Passing","Start":{"h":11,"m":31},"End":{"h":11,"m":35}},{"Title":"E Period (First Lunch)","Start":{"h":11,"m":35},"End":{"h":12,"m":0}},{"Title":"E Period (Lunch Passing)","Start":{"h":12,"m":0},"End":{"h":12,"m":3}},{"Title":"E Period (Second Lunch)","Start":{"h":12,"m":3},"End":{"h":12,"m":28}},{"Title":"E Period (Lunch Passing)","Start":{"h":12,"m":28},"End":{"h":12,"m":31}},{"Title":"E Period (Third Lunch)","Start":{"h":12,"m":31},"End":{"h":12,"m":56}},{"Title":"Passing","Start":{"h":12,"m":56},"End":{"h":13,"m":0}},{"Title":"F Period","Start":{"h":13,"m":0},"End":{"h":13,"m":28}},{"Title":"Passing","Start":{"h":13,"m":28},"End":{"h":13,"m":32}},{"Title":"G Period","Start":{"h":13,"m":32},"End":{"h":14,"m":0}},{"Title":"After School","Start":{"h":14,"m":0},"End":{"h":24,"m":0}}];        
  B_FinalSchedule = [{"Title":"Before School","Start":{"h":0,"m":0},"End":{"h":7,"m":20}},{"Title":"A Period","Start":{"h":7,"m":20},"End":{"h":8,"m":2}},{"Title":"Passing","Start":{"h":8,"m":2},"End":{"h":8,"m":6}},{"Title":"B Period (FINAL!!)","Start":{"h":8,"m":6},"End":{"h":9,"m":36}},{"Title":"Passing","Start":{"h":9,"m":36},"End":{"h":9,"m":40}},{"Title":"C Period","Start":{"h":9,"m":40},"End":{"h":10,"m":21}},{"Title":"Passing","Start":{"h":10,"m":21},"End":{"h":10,"m":25}},{"Title":"D Period","Start":{"h":10,"m":25},"End":{"h":11,"m":6}},{"Title":"Passing","Start":{"h":11,"m":6},"End":{"h":11,"m":10}},{"Title":"E Period (First Lunch)","Start":{"h":11,"m":10},"End":{"h":11,"m":35}},{"Title":"E Period (Lunch Passing)","Start":{"h":11,"m":35},"End":{"h":11,"m":38}},{"Title":"E Period (Second Lunch)","Start":{"h":11,"m":38},"End":{"h":12,"m":3}},{"Title":"E Period (Lunch Passing)","Start":{"h":12,"m":3},"End":{"h":12,"m":6}},{"Title":"E Period (Third Lunch)","Start":{"h":12,"m":6},"End":{"h":12,"m":31}},{"Title":"Passing","Start":{"h":12,"m":31},"End":{"h":12,"m":35}},{"Title":"F Period","Start":{"h":12,"m":35},"End":{"h":13,"m":16}},{"Title":"Passing","Start":{"h":13,"m":16},"End":{"h":13,"m":20}},{"Title":"G Period","Start":{"h":13,"m":20},"End":{"h":14,"m":0}},{"Title":"After School","Start":{"h":14,"m":0},"End":{"h":24,"m":0}}];    
  DF_FinalSchedule = [{"Title":"Before School","Start":{"h":0,"m":0},"End":{"h":7,"m":20}},{"Title":"D Period (FINAL!!!)","Start":{"h":7,"m":20},"End":{"h":9,"m":10}},{"Title":"Passing","Start":{"h":9,"m":10},"End":{"h":9,"m":25}},{"Title":"F Period (FINAL!!!)","Start":{"h":9,"m":25},"End":{"h":11,"m":5}},{"Title":"After School","Start":{"h":11,"m":5},"End":{"h":24,"m":0}}];
  EG_FinalSchedule = [{"Title":"Before School","Start":{"h":0,"m":0},"End":{"h":7,"m":20}},{"Title":"E Period (FINAL!!!)","Start":{"h":7,"m":20},"End":{"h":9,"m":10}},{"Title":"Passing","Start":{"h":9,"m":10},"End":{"h":9,"m":25}},{"Title":"G Period (FINAL!!!)","Start":{"h":9,"m":25},"End":{"h":11,"m":5}},{"Title":"After School","Start":{"h":11,"m":5},"End":{"h":24,"m":0}}];
    
  halfdays = ["2-13","3-6","4-24","5-22","6-18"];
  noschooldays = ["2-18","2-19","2-20","2-21","2-22","3-29","4-15","4-16","4-17","4-18","4-19","5-27","2-8","2-11","2-12"];
  twohourdelaydays = ["2-13", "2-14", "3-19"];
  onehourdelaydays = [];
  onehourdelay_schedule = [{"Title":"Before School","Start":{"h":0,"m":0},"End":{"h":8,"m":20}},{"Title":"A Period","Start":{"h":8,"m":20},"End":{"h":9,"m":0}},{"Title":"Passing","Start":{"h":9,"m":0},"End":{"h":9,"m":4}},{"Title":"B Period","Start":{"h":9,"m":4},"End":{"h":9,"m":43}},{"Title":"Passing","Start":{"h":9,"m":43},"End":{"h":9,"m":47}},{"Title":"C Period","Start":{"h":9,"m":47},"End":{"h":10,"m":26}},{"Title":"Passing","Start":{"h":10,"m":26},"End":{"h":10,"m":30}},{"Title":"D Period","Start":{"h":10,"m":30},"End":{"h":11,"m":9}},{"Title":"Passing","Start":{"h":11,"m":9},"End":{"h":11,"m":13}},{"Title":"E Period (1st Lunch)","Start":{"h":11,"m":13},"End":{"h":11,"m":38}},{"Title":"E Period (Lunch Passing)","Start":{"h":11,"m":38},"End":{"h":11,"m":41}},{"Title":"E Period (2nd Lunch)","Start":{"h":11,"m":41},"End":{"h":12,"m":6}},{"Title":"E Period (Lunch Passing)","Start":{"h":12,"m":6},"End":{"h":12,"m":9}},{"Title":"E Period (3rd Lunch)","Start":{"h":12,"m":9},"End":{"h":12,"m":34}},{"Title":"Passing","Start":{"h":12,"m":34},"End":{"h":12,"m":38}},{"Title":"F Period","Start":{"h":12,"m":38},"End":{"h":13,"m":17}},{"Title":"Passing","Start":{"h":13,"m":17},"End":{"h":13,"m":21}},{"Title":"G Period","Start":{"h":13,"m":21},"End":{"h":14,"m":0}},{"Title":"After School","Start":{"h":14,"m":0},"End":{"h":24,"m":0}}];
  
  sundayschedule = [{"Title":"Sleeping","Start":{"h":0,"m":0},"End":{"h":7,"m":0}},{"Title":"Be religous and stuff","Start":{"h":7,"m":0},"End":{"h":13,"m":0}},{"Title":"Relax","Start":{"h":13,"m":0},"End":{"h":18,"m":0}},{"Title":"Panic and do homework","Start":{"h":18,"m":0},"End":{"h":24,"m":0}}];
  mondayschedule = [{"Title":"Before School","Start":{"h":0,"m":0},"End":{"h":7,"m":20}},{"Title":"A Period","Start":{"h":7,"m":20},"End":{"h":8,"m":10}},{"Title":"Passing","Start":{"h":8,"m":10},"End":{"h":8,"m":14}},{"Title":"B Period","Start":{"h":8,"m":14},"End":{"h":9,"m":3}},{"Title":"Passing","Start":{"h":9,"m":3},"End":{"h":9,"m":7}},{"Title":"C Period","Start":{"h":9,"m":7},"End":{"h":9,"m":56}},{"Title":"Passing","Start":{"h":9,"m":56},"End":{"h":10,"m":0}},{"Title":"D Period","Start":{"h":10,"m":0},"End":{"h":10,"m":49}},{"Title":"Passing","Start":{"h":10,"m":49},"End":{"h":10,"m":53}},{"Title":"E Period (First Lunch)","Start":{"h":10,"m":53},"End":{"h":11,"m":18}},{"Title":"E Period (Lunch Passing)","Start":{"h":11,"m":18},"End":{"h":11,"m":21}},{"Title":"E Period (Second Lunch)","Start":{"h":11,"m":21},"End":{"h":11,"m":46}},{"Title":"E Period (Lunch Passing)","Start":{"h":11,"m":46},"End":{"h":11,"m":49}},{"Title":"E Period (Third Lunch)","Start":{"h":11,"m":49},"End":{"h":12,"m":14}},{"Title":"Passing","Start":{"h":12,"m":14},"End":{"h":12,"m":18}},{"Title":"F Period","Start":{"h":12,"m":18},"End":{"h":13,"m":7}},{"Title":"Passing","Start":{"h":13,"m":7},"End":{"h":13,"m":11}},{"Title":"G Period","Start":{"h":13,"m":11},"End":{"h":14,"m":0}},{"Title":"After School","Start":{"h":14,"m":0},"End":{"h":24,"m":0}}];
  tuesdayschedule = [{"Title":"Before School","Start":{"h":0,"m":0},"End":{"h":7,"m":20}},{"Title":"A Period","Start":{"h":7,"m":20},"End":{"h":8,"m":5}},{"Title":"Passing","Start":{"h":8,"m":5},"End":{"h":8,"m":9}},{"Title":"B Period","Start":{"h":8,"m":9},"End":{"h":8,"m":53}},{"Title":"Passing","Start":{"h":8,"m":53},"End":{"h":8,"m":57}},{"Title":"C Period","Start":{"h":8,"m":57},"End":{"h":9,"m":41}},{"Title":"Passing","Start":{"h":9,"m":41},"End":{"h":9,"m":45}},{"Title":"Advisory","Start":{"h":9,"m":45},"End":{"h":10,"m":10}},{"Title":"Passing","Start":{"h":10,"m":10},"End":{"h":10,"m":14}},{"Title":"D Period","Start":{"h":10,"m":14},"End":{"h":10,"m":58}},{"Title":"Passing","Start":{"h":10,"m":58},"End":{"h":11,"m":2}},{"Title":"E Period (First Lunch)","Start":{"h":11,"m":2},"End":{"h":11,"m":27}},{"Title":"E Period (Lunch Passing)","Start":{"h":11,"m":27},"End":{"h":11,"m":30}},{"Title":"E Period (Second Lunch)","Start":{"h":11,"m":30},"End":{"h":11,"m":55}},{"Title":"E Period (Lunch Passing)","Start":{"h":11,"m":55},"End":{"h":11,"m":58}},{"Title":"E Period (Third Lunch)","Start":{"h":11,"m":58},"End":{"h":12,"m":23}},{"Title":"Passing","Start":{"h":12,"m":23},"End":{"h":12,"m":27}},{"Title":"F Period","Start":{"h":12,"m":27},"End":{"h":13,"m":11}},{"Title":"Passing","Start":{"h":13,"m":11},"End":{"h":13,"m":15}},{"Title":"G Period","Start":{"h":13,"m":15},"End":{"h":14,"m":0}},{"Title":"After School","Start":{"h":14,"m":0},"End":{"h":24,"m":0}}];
  thursdayschedule = mondayschedule;
  saturdayschedule = [{"Title":"Chillax","Start":{"h":0,"m":0},"End":{"h":24,"m":0}}];
    
  seniorfinalmakeupschedule = [{"Title":"Before School","Start":{"h":0,"m":0},"End":{"h":7,"m":20}},{"Title":"G Period","Start":{"h":7,"m":20},"End":{"h":8,"m":50}},{"Title":"Passing","Start":{"h":8,"m":50},"End":{"h":8,"m":54}},{"Title":"A Period","Start":{"h":8,"m":54},"End":{"h":10,"m":24}},{"Title":"Passing","Start":{"h":10,"m":24},"End":{"h":10,"m":28}},{"Title":"B Period","Start":{"h":10,"m":28},"End":{"h":10,"m":56}},{"Title":"Passing","Start":{"h":10,"m":56},"End":{"h":11,"m":0}},{"Title":"C Period (First Lunch)","Start":{"h":11,"m":0},"End":{"h":11,"m":25}},{"Title":"C Period (Lunch Passing)","Start":{"h":11,"m":25},"End":{"h":11,"m":28}},{"Title":"C Period (Second Lunch)","Start":{"h":11,"m":28},"End":{"h":11,"m":53}},{"Title":"C Period (Lunch Passing)","Start":{"h":11,"m":53},"End":{"h":11,"m":56}},{"Title":"C Period (Third Lunch)","Start":{"h":11,"m":56},"End":{"h":12,"m":21}},{"Title":"Passing","Start":{"h":12,"m":21},"End":{"h":12,"m":25}},{"Title":"D Period","Start":{"h":12,"m":25},"End":{"h":12,"m":53}},{"Title":"Passing","Start":{"h":12,"m":53},"End":{"h":12,"m":57}},{"Title":"E Period","Start":{"h":12,"m":57},"End":{"h":13,"m":25}},{"Title":"Passing","Start":{"h":13,"m":25},"End":{"h":13,"m":29}},{"Title":"F Period","Start":{"h":13,"m":29},"End":{"h":14,"m":0}},{"Title":"After School","Start":{"h":14,"m":0},"End":{"h":24,"m":0}}];
  window.Days = 
    {
      "special":[
        {
          "days": "6-20",
          "schedule": B_FinalSchedule,
        },
        {
          "days": "6-21",
          "schedule": AC_FinalSchedule,
        },
        {
          "days": "6-24",
          "schedule": DF_FinalSchedule,
        },
        {
          "days": "6-25",
          "schedule": EG_FinalSchedule,
        },
        {
          "days": "6-26",
          "schedule": [{"Title":"Chillax","Start":{"h":0,"m":0},"End":{"h":7,"m":25}},{"Title":"Make-up Exams","Start":{"h":7,"m":25},"End":{"h":11,"m":5}},{"Title":"Chillax","Start":{"h":11,"m":5},"End":{"h":24,"m":0}}],
        },
        {
          "days": halfdays,
          "schedule": halfday_schedule,
        },
        {
          "days":noschooldays,
          "schedule":noschoolday_schedule
        },
        {
          "days":twohourdelaydays,
          "schedule": twohourdelay_schedule
        },{
          "days":onehourdelaydays,
          "schedule": onehourdelay_schedule
        },
        {
          "days": ["5-30"],
          "schedule": seniorfinalmakeupschedule,
        },
      ],
      "normal": [sundayschedule,mondayschedule,tuesdayschedule,tuesdayschedule,thursdayschedule,mondayschedule,saturdayschedule]
      };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  



document.getElementById('Calculate').addEventListener('click',function(){
   
    const getMonthSelect =document.getElementById('monthValue')
    const getMonth =getMonthSelect.value
    const getDaySelect=document.getElementById('dayValue')
    const getDay =parseInt(getDaySelect.value)
    const getYearInput =document.getElementById('yearValue')
    const getYear =parseInt(getYearInput.value)

    const getMonthSelect1 =document.getElementById('monthValue1')
    const getMonth1 =getMonthSelect1.value
    const getDaySelect1=document.getElementById('dayValue1')
    const getDay1 =parseInt(getDaySelect1.value)
    const getYearInput1 =document.getElementById('yearValue1')
    const getYear1 =parseInt(getYearInput1.value)
    
    const months=['January','February','March','April','May','June','July','August','September','October','November','December']
    for(var i=0;i<months.length;i++){
        let month =months[i]
        if(getMonth==month){
            var x=months.indexOf(month)+1
        }
        if(getMonth1==month){
           var y=months.indexOf(month)+1
        }
    }
    
    if(getDay1>=getDay && y>=x && getYear1>=getYear){
        condition1(x,y,getDay,getDay1,getYear,getYear1)
    }
    else if(getDay1<getDay && y>=x && getYear1>getYear){
        condition2(x,y,getDay,getDay1,getYear,getYear1)
    }
    else if(getDay1>=getDay && y<x && getYear1>getYear){
        condition3(x,y,getDay,getDay1,getYear,getYear1)
    }
    else if(getDay1<getDay && y<x && getYear1>getYear){
        condition4(x,y,getDay,getDay1,getYear,getYear1)
    }
    
    //weeksdays of birth date

const weekDays =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const date =new Date(getYear,x-1,getDay)

document.getElementById('setInformation').innerHTML=` <p>You were born on <span id="setWeekday"></span>.</p>`
document.getElementById('setWeekday').innerText=weekDays[date.getDay()]


//when next HBD
var NextBirthDate =getDay;
var NextBirthMonth=x;
var NextBirthYear =getYear1;

if(NextBirthMonth>=y&&NextBirthYear==getYear1&& getDay>=getDay1){
    var yearDiffOfNextBirth=(getYear1-NextBirthYear)
    var monthDiffOfNextBirth=(NextBirthMonth-y)
    var dayDiffOfNextBirth =getDay-getDay1
    var z= getYear1
    lastInformation(monthDiffOfNextBirth,dayDiffOfNextBirth,z,getDay,x)
}
else if(NextBirthMonth>y&&NextBirthYear==getYear1&& getDay<getDay1){
    var dayDiffOfNextBirth =(getDay+30)-getDay1
    var monthDiffOfNextBirth=(NextBirthMonth-1)-y
    var z=getYear1
    lastInformation(monthDiffOfNextBirth,dayDiffOfNextBirth,z,getDay,x)
}
else if(NextBirthMonth<y&&NextBirthYear==getYear1&& getDay>=getDay1){
    var dayDiffOfNextBirth =getDay-getDay1
    var yearDiffOfNextBirth=(getYear1+1)
    var monthDiffOfNextBirth=(NextBirthMonth+12)
    monthDiffOfNextBirth=monthDiffOfNextBirth-y
    var z= yearDiffOfNextBirth
    lastInformation(monthDiffOfNextBirth,dayDiffOfNextBirth,z,getDay,x)
}
else if(NextBirthMonth<y&&NextBirthYear==getYear1&& getDay<getDay1){
    var yearDiffOfNextBirth=(getYear1+1)
    var dayDiffOfNextBirth =(getDay+30)-getDay1
    var monthDiffOfNextBirth=(NextBirthMonth-1)+12
    monthDiffOfNextBirth=monthDiffOfNextBirth-y
    var z= yearDiffOfNextBirth
    lastInformation(monthDiffOfNextBirth,dayDiffOfNextBirth,z,getDay,x)
}
else if(NextBirthMonth==y&& getDay==getDay1){
    var z=getYear1
    const date1= new Date(z,x-1,getDay)
document.getElementById('setInformation2').innerHTML=` <p>Happy Birthday!Your next birthday will be on <span id="futureHBD"></span>.</p>`
document.getElementById('futureHBD').innerText=weekDays[date1.getDay()];
}

function lastInformation(A,B,C,D){
    document.getElementById('setInformation1').innerHTML=` <p>Your next birthday will be in <span id="monthCount"></span> months & <span id="dayCount"></span> days on <span id="futureHBD"></span>.</p>`
    const date1= new Date(z,x-1,getDay)
    document.getElementById('monthCount').innerText=A;
    document.getElementById('dayCount').innerText=B;
    document.getElementById('futureHBD').innerText=weekDays[date1.getDay()];
}
})

// condition1
function condition1 (A,B,C,D,E,F){
    const leapYears=[]
    for(var i =E;i<=F;i++){
        
        if(i%4==0){
            leapYears.push(i)
        }
        else if(i%100==0){
            if(i%400==0){
                leapYears.push(i)
            }        
        }
    }
    
    const yearDiff =F-E
    const monthDiff=B-A
    var dayDiff  =D-C
    dayDiff=dayDiff+leapYears.length
    const span1= document.getElementById('span1')
    span1.innerText=yearDiff
    const span2= document.getElementById('span2')
    span2.innerText=monthDiff
    const span3= document.getElementById('span3')
    span3.innerText=dayDiff
   }

// condition2
function condition2(A,B,C,D,E,F){
    const leapYears=[]
    for(var i =E;i<=F;i++){
        
        if(i%4==0){
            leapYears.push(i)
        }
        else if(i%100==0){
            if(i%400==0){
                leapYears.push(i)
            }        
        }
    }
   
  
    var dayDiff=(D+30)-C
    const yearDiff =F-E
    var monthDiff=(B-1)-A
    
    dayDiff=dayDiff+leapYears.length
    if(dayDiff>=30){
        monthDiff=monthDiff+1
        dayDiff=dayDiff-30
    }
    const span1= document.getElementById('span1')
    span1.innerText=yearDiff
    const span2= document.getElementById('span2')
    span2.innerText=monthDiff
    const span3= document.getElementById('span3')
    span3.innerText=dayDiff
}

// condition 3
function condition3(A,B,C,D,E,F){
    const leapYears=[]
    for(var i =E;i<=F;i++){
        
        if(i%4==0){
            leapYears.push(i)
        }
        else if(i%100==0){
            if(i%400==0){
                leapYears.push(i)
            }        
        }
    }
    var dayDiff=(D-C)
    const yearDiff =(F-1)-E
    var monthDiff=(B+12)-A
    
    dayDiff=dayDiff+leapYears.length
    if(dayDiff>=30){
        monthDiff=monthDiff+1
        dayDiff=dayDiff-30
    }
    const span1= document.getElementById('span1')
    span1.innerText=yearDiff
    const span2= document.getElementById('span2')
    span2.innerText=monthDiff
    const span3= document.getElementById('span3')
    span3.innerText=dayDiff
}

//condition 4
function condition4(A,B,C,D,E,F){
    const leapYears=[]
    for(var i =E;i<=F;i++){
        
        if(i%4==0){
            leapYears.push(i)
        }
        else if(i%100==0){
            if(i%400==0){
                leapYears.push(i)
            }        
        }
    }
    var dayDiff=(D+30)-C
    var monthDiff=(B-1)+12
    monthDiff=monthDiff-A
    const yearDiff =(F-1)-E
    
    
    dayDiff=dayDiff+leapYears.length
    if(dayDiff>=30){
        monthDiff=monthDiff+1
        dayDiff=dayDiff-30
    }
    const span1= document.getElementById('span1')
    span1.innerText=yearDiff
    const span2= document.getElementById('span2')
    span2.innerText=monthDiff
    const span3= document.getElementById('span3')
    span3.innerText=dayDiff
}

//set today's date auto
var getYearCurrent =new Date().getFullYear()
var getMonthCurrent =new Date().getMonth()+1
var getDateCurrent =new Date().getDate()

const currentYear=document.getElementById('yearValue1')
currentYear.value=getYearCurrent
const currentDate=document.getElementById("dayValue1")
currentDate.value=getDateCurrent

const months=['January','February','March','April','May','June','July','August','September','October','November','December']
for(var i=0;i<months.length;i++){
   var month=months[i]
   var FindIndex=months.indexOf(month)
   //console.log(FindIndex)
   if(getMonthCurrent==FindIndex){
    const currentMonth=document.getElementById("monthValue1")
    currentMonth.value=months[FindIndex-1]
   }
}



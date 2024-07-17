function calculate(){
    var GPA=document.getElementById("Grad").value;
    if(GPA<100 && GPA>95){
        document.getElementById("result").innerHTML=("Your Grad : A+ ======> Perfect Score");
    }
    else if(GPA<=95 && GPA>90){
        document.getElementById("result").innerHTML=("Your Grad : A ======> Perfect Score");
    }
    else if(GPA<=90 && GPA>85){
        document.getElementById("result").innerHTML=("Your Grad : A- ======> Perfect Score");
    }
    else if(GPA<=85 && GPA>80){
        document.getElementById("result").innerHTML=("Your Grad : B+");
    }
    else if(GPA<=80 && GPA>75){
        document.getElementById("result").innerHTML=("Your Grad : B");
    }
    else if(GPA<=75 && GPA>70){
        document.getElementById("result").innerHTML=("Your Grad : B-");
    }
    else if(GPA<=70 && GPA>65){
        document.getElementById("result").innerHTML=("Your Grad : C+");
    }
    else if(GPA<=65 && GPA>60){
        document.getElementById("result").innerHTML=("Your Grad : C-");
    }
    else if(GPA<=60 && GPA>55){
        document.getElementById("result").innerHTML=("Your Grad : D+");
    }
    else if(GPA<=55 && GPA>50){
        document.getElementById("result").innerHTML=("Your Grad : D");
    }
    else if(GPA<=50 && GPA>=0){
        document.getElementById("result").innerHTML=("Your Grad : F");
    }
    else{
        document.getElementById("result").innerHTML=("Error , Try Again !");
    }
    
    var GPA2=document.getElementById("Grad").value;
    switch(GPA2){
        case 100:
        document.getElementById("result").innerHTML=("Your Grad : A+ ======> Perfect Score");break;
        case 99:
            document.getElementById("result").innerHTML=("Your Grad : A+ ======> Perfect Score");break;
        case 98:
            document.getElementById("result").innerHTML=("Your Grad : A+ ======> Perfect Score");break;
        case 97:
            document.getElementById("result").innerHTML=("Your Grad : A+ ======> Perfect Score");break;
        case 96:
            document.getElementById("result").innerHTML=("Your Grad : A+ ======> Perfect Score");break;
        case 95 :
            document.getElementById("result").innerHTML=("Your Grad : A+ ======> Perfect Score");break;
         case 94 :
          document.getElementById("result").innerHTML=("Your Grad : A ======> Perfect Score");break;
        case 93 :
        document.getElementById("result").innerHTML=("Your Grad : A ======> Perfect Score");break;
        case 92 :
         document.getElementById("result").innerHTML=("Your Grad : A ======> Perfect Score");break; 
        case 91 :
        document.getElementById("result").innerHTML=("Your Grad : A ======> Perfect Score");break;
        case 90 :
        document.getElementById("result").innerHTML=("Your Grad : A ======> Perfect Score");break;
        case 89 :
        document.getElementById("result").innerHTML=("Your Grad : A- ======> Perfect Score");break;
        case 88 :
        document.getElementById("result").innerHTML=("Your Grad : A- ======> Perfect Score");break;
        case 87 :
        document.getElementById("result").innerHTML=("Your Grad : A- ======> Perfect Score");break;
        case 86 :
        document.getElementById("result").innerHTML=("Your Grad : A- ======> Perfect Score");break;
        case 85 :
        document.getElementById("result").innerHTML=("Your Grad : A- ======> Perfect Score");break;
        case 84 :
        document.getElementById("result").innerHTML=("Your Grad : B+ ");break;
        case 83 :
        document.getElementById("result").innerHTML=("Your Grad : B+ ");break;
        case 82 :
         document.getElementById("result").innerHTML=("Your Grad : B+ ");break;
         case 81 :
        document.getElementById("result").innerHTML=("Your Grad : B+ ");break;
        case 80 :
         document.getElementById("result").innerHTML=("Your Grad : B+ ");break;
        case 79 :
         document.getElementById("result").innerHTML=("Your Grad : B ");break;
         case 78 :
        document.getElementById("result").innerHTML=("Your Grad : B ");break;
        case 77 :
         document.getElementById("result").innerHTML=("Your Grad : B ");break;
         case 76 :
         document.getElementById("result").innerHTML=("Your Grad : B ");break;
         case 75 :
         document.getElementById("result").innerHTML=("Your Grad : B ");break;
         case 74 :
         document.getElementById("result").innerHTML=("Your Grad : B- ");break;
         case 73 :
         document.getElementById("result").innerHTML=("Your Grad : B- ");break;
         case 72 :
         document.getElementById("result").innerHTML=("Your Grad : B- ");break;
         case 71 :
        document.getElementById("result").innerHTML=("Your Grad : B- ");break;
        case 70 :
        document.getElementById("result").innerHTML=("Your Grad : B- ");break;
        case 69 :
        document.getElementById("result").innerHTML=("Your Grad : C+");break;
        case 68 :
        document.getElementById("result").innerHTML=("Your Grad : C+");break;
        case 67 :
        document.getElementById("result").innerHTML=("Your Grad : C+");break;
        case 66 :
        document.getElementById("result").innerHTML=("Your Grad : C+");break;
        case 65 :
        document.getElementById("result").innerHTML=("Your Grad : C+");break;
        case 64 :
        document.getElementById("result").innerHTML=("Your Grad : C-");break;
        case 63 :
        document.getElementById("result").innerHTML=("Your Grad : C-");break;
        case 62 :
        document.getElementById("result").innerHTML=("Your Grad : C-");break;
        case 61 :
        document.getElementById("result").innerHTML=("Your Grad : C-");break;
        case 60 :
        document.getElementById("result").innerHTML=("Your Grad : C-");break;
        case 59 :
        document.getElementById("result").innerHTML=("Your Grad : D+");break;
        case 58 :
        document.getElementById("result").innerHTML=("Your Grad : D+");break;
        case 57 :
        document.getElementById("result").innerHTML=("Your Grad : D+");break;
        case 56 :
        document.getElementById("result").innerHTML=("Your Grad : D+");break;
        case 55 :
        document.getElementById("result").innerHTML=("Your Grad : D+");break;
        case 54 :
        document.getElementById("result").innerHTML=("Your Grad : D");break;
        case 53 :
        document.getElementById("result").innerHTML=("Your Grad : D");break;
        case 52 :
        document.getElementById("result").innerHTML=("Your Grad : D");break;
        case 51 :
        document.getElementById("result").innerHTML=("Your Grad : D");break;
        case 50 :
        document.getElementById("result").innerHTML=("Your Grad : D");break;
        case 49 :
         document.getElementById("result").innerHTML=("Your Grad : F");break;
         case 48 :
         document.getElementById("result").innerHTML=("Your Grad : F");break;
         case 47 :
         document.getElementById("result").innerHTML=("Your Grad : F");break;
         case 46 :
         document.getElementById("result").innerHTML=("Your Grad : F");break;
         case 45 :
         document.getElementById("result").innerHTML=("Your Grad : F");break;
         case 44 :
        document.getElementById("result").innerHTML=("Your Grad : F");break;
        case 43 :
        document.getElementById("result").innerHTML=("Your Grad : F");break;
        case 42 :
        document.getElementById("result").innerHTML=("Your Grad : F");break;
        case 41 :
         document.getElementById("result").innerHTML=("Your Grad : F");break;
         case 40 :
         document.getElementById("result").innerHTML=("Your Grad : F");break;
    }
    }
    
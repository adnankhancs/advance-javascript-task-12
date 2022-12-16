// Design pattern problem - How will you design a Student class which stores the name , age , phone number, board marks of each student.
// Write a function to check whether the student is egligible or not for college. 
// If board marks > 40 -> egligible , if less than 40 -> not egligible.
class student{
    static count=0;
    constructor(name , age , phone , marks){
        student.count+=1;
        this.name=name;
        this.age=age;
        this.phone=phone;
        this.marks=marks;
    }
    check_placement=(age,marks)=>{if(age<this.age && marks<this.marks)
                                    console.log("eligible");
                                  else 
                                    console.log(" not eligible")} ;
    check(){
        if(this.marks>=40)
        console.log("egligible");
        else
        console.log("not egligible");
    }
    }

//  Create 5 students with different names and age.
const s1=new student("reacher",25,'9891',45); 
const s2=new student("bourne",45,'9801',33);
s1.check();
console.log(student.count);
const s3=new student("homes",45,'9801',53);
console.log(student.count);
s1.check_placement(44,44);
s2.check_placement(44,44);
s3.check_placement(44,44);

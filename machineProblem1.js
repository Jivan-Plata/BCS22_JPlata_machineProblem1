// ITCS227 Source Code Template for 2T AY 2022-2023
/*
	Program: 	  Computation of Grades using Function
	Programmer:   Jivan Elgin G. Plata
	Section:      BCS22
	Start Date:   April 17, 2023
	End Date:     April 20, 2023
*/

let grade = [];

var enablingAssessment1, enablingAssessment2, enablingAssessment3, enablingAssessment4, enablingAssessment5, summativeAssessment1, summativeAssessment2, summativeAssessment3, majorExam, name, classParticipation, summativeGrade, letter, finalGrade;

for(let i = 0; i < 5; i++) {
	name = prompt("Enter the name of the student: ")
	enablingAssessment1 = parseInt(prompt("Enter enabling assessment 1 score: "))
	enablingAssessment2 = parseInt(prompt("Enter enabling assessment 2 score: "))
	enablingAssessment3 = parseInt(prompt("Enter enabling assessment 3 score: "))
	enablingAssessment4 = parseInt(prompt("Enter enabling assessment 4 score: "))
	enablingAssessment5 = parseInt(prompt("Enter enabling assessment 5 score: "))
	summativeAssessment1 = parseInt(prompt("Enter summative assessment 1 score: "))
	summativeAssessment2 = parseInt(prompt("Enter summative assessment 2 score: "))
	summativeAssessment3 = parseInt(prompt("Enter summative assessment 3 score: "))
	majorExam = parseInt(prompt("Enter major exam grade: "))

	classParticipation = Math.round((enablingAssessment1 + enablingAssessment2 + enablingAssessment3 + enablingAssessment4 + enablingAssessment5) / 5);
	summativeGrade = Math.round((summativeAssessment1 + summativeAssessment2 + summativeAssessment3) / 3);
	finalGrade = Math.round((classParticipation * 0.30) + (summativeGrade * 0.30) + (majorExam * 0.40));

	if (finalGrade >= 90){
		letter = "A";
	}  else if (finalGrade >= 80 && finalGrade <= 89){
		letter = "B";
	} else if (finalGrade >= 70 && finalGrade <= 79){
		letter = "C";
	} else if (finalGrade >= 60 && finalGrade <= 69){
		letter = "D";		
	} else {
		letter = "F";
	}

	grade[i] = {
		Student_Name: name,
		Class_Participation: classParticipation,
		Summative_Assessment: summativeGrade,
		Exam_Grade: majorExam,
		Grade_Score: finalGrade,
		Letter_Grade: letter 
	}
}

console.table(grade);
DROP DATABASE IF EXISTS CurieDB;
CREATE DATABASE CurieDB;
USE CurieDB;

CREATE TABLE CurieTrivia (
    ID INT AUTO_INCREMENT,
    Question VARCHAR(255),
    AnswerA VARCHAR(255),
    AnswerB VARCHAR(255),
    AnswerC VARCHAR(255),
    AnswerD VARCHAR(255),
    CorrectAnswer CHAR(1),
    PRIMARY KEY (ID)
);

INSERT INTO CurieTrivia (Question, AnswerA, AnswerB, AnswerC, AnswerD, CorrectAnswer)
VALUES 
('Gdzie urodziła się Maria Skłodowska-Curie?', 'Paryż, Francja', 'Warszawa, Polska', 'Berlin, Niemcy', 'Londyn, Wielka Brytania', 'B'),
('W którym roku Maria Skłodowska-Curie otrzymała swoją pierwszą Nagrodę Nobla?', '1903', '1911', '1895', '1920', 'A'),
('Jakie pierwiastki odkryła Maria Skłodowska-Curie?', 'Radium i Polon', 'Uran i Pluton', 'Hel i Neon', 'Ołów i Cynk', 'A');
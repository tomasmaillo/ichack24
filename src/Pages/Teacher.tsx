import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Graph from '../Components/Graph'; // Adjust the path based on your project structure

const Teacher = () => {
  const rawData = ['London', 3, 'Paris', 2, 'Seattle', 1, 'Munich', 4];
  const dynamicData = [];
  for (let i = 0; i < rawData.length; i += 2) {
    dynamicData.push({ key: rawData[i], value: rawData[i + 1] });
  }

  const questions = [
    {
      question: 'What is the capital of France?',
      choices: ['London', 'Paris', 'Seattle', 'Munich'],
      answer: 'Paris',
    },

    // Add more questions as needed
  ];

  // Calculate overall score
  const totalQuestions = questions.length;
  const correctAnswers = dynamicData.filter((entry) => {
    const question = questions.find((q) => q.question === entry.key);
    return question && entry.value === question.choices.indexOf(question.answer) + 1;
  }).length;

  const overallScore = (correctAnswers / totalQuestions) * 100;

  const COLORS = ['#D1A0EE', '#1766FF', '#51DE4E', '#FFC267'];
  const RECTCOLOR = '#FFA824';
  const texts = [
    'I do not understand simultaneous equations',
    'Could you please explain the example with the polynomial again?',
    'Could we focus on quadratic equations?',
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div style={{ width: '100vw' }}>
      <div style={{ maxWidth: '600px', margin: 'auto' }}>
        <Graph dynamicData={dynamicData} COLORS={COLORS} renderCustomizedLabel={renderCustomizedLabel} />
        <div style={{ display: 'flex', marginTop: '20px', marginLeft: '50px' }}>
        <div style={{ flexDirection: 'column', marginRight: '20px' }}>
          <h3> Questions by students</h3>
          {[0, 1, 2].map((index) => (
            <div
              key={`rectangle-${index}`}
              style={{
                width: '190px',
                height: '60px',
                backgroundColor: RECTCOLOR,
                borderRadius: '10px',
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '13px',
              }}
            >
              {texts[index]}
            </div>
          ))}
        </div>
        <div>
          <div>
            <h3>Overall Score</h3>
          </div>
          <CircularProgressbar
            value={overallScore}
            text={`${overallScore.toFixed(0)}%`}
            styles={{
              root: { width: '100px', marginLeft: '20px' },
              path: { stroke: 'red' },
              text: { fill: 'black' },
            }}
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Teacher;

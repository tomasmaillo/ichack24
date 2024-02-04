import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Teacher = () => {
  const data = [
    { name: 'Group A', value: 400, isExploded: false },
    { name: 'Group B', value: 300, isExploded: false },
    { name: 'Group C', value: 300, isExploded: false },
    { name: 'Group D', value: 200, isExploded: false },
  ];

  const COLORS = ['#D1A0EE', '#1766FF', '#51DE4E', '#FFC267'];
  const RECTCOLOR = '#FFA824';
  const texts = ['I do not understand simutaneous equations', 'Could you please explain the example with the polynomial again?', 'Could we focus on quadratic equations?',];

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

  const percentage = 66;

  return (
    <div>

      <div style={{ marginTop: '-100px' }}> 
        <ResponsiveContainer width="100%" height={300}>
          <div style={{ display: 'flex' }}>
          <h4 style={{ marginLeft: '265px', marginTop:'75px' }}>This is a sample question</h4>
            <div style={{ flex: 1 }}>
              <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', marginTop: '105px', }}>
              {data.map((entry, index) => (
                <div key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      backgroundColor: COLORS[index % COLORS.length],
                      borderRadius: '5px',
                      marginRight: '5px',
                    }}
                  ></div>
                  <span>{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ResponsiveContainer>
      </div>

      <div style={{ display: 'flex', marginTop: '20px', marginLeft: '50px', }}>
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
      value={percentage}
      text={`${percentage}%`}
      styles={{
        root: { width: '100px', marginLeft: '20px' },
        path: { stroke: 'red' },
        text: { fill: 'black' },
      }}
    />
  </div>
</div>
</div>
  );
};

export default Teacher;

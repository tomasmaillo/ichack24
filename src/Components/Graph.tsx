import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const Graph = ({ dynamicData, COLORS, renderCustomizedLabel }) => {
  return (
    <div>
      <h4>This is a sample question</h4>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {dynamicData.map((entry, index) => (
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
              <span>{entry.key}</span>
            </div>
          ))}
        </div>
        <PieChart width={200} height={200}>
          <Pie
            data={dynamicData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {dynamicData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default Graph;

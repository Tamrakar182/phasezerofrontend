import React from 'react';
import { SizeData } from '@/types/product';

interface Props {
  data: SizeData[];
}


const SizeChart = ({ data }: Props) => {
  const columns = [
    { title: 'Sizes', key: 'size' },
    { title: 'Chest', key: 'chest' },
    { title: 'Length', key: 'length' },
    { title: 'Sleeves', key: 'sleeves' },
  ];

  return (
    <table style={{ height: '200px', width: '100%' }}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="text-center border-gray-200 border text-xsmall-regular h-[50px]">{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="text-center border-gray-200 border text-xsmall-regular h-[50px]">
            {columns.map((column) => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SizeChart;

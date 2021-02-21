import React from 'react';
import './TableView.css';

function TableView({ data }) {
	return (
		<table id="table">
			<thead>
				<tr>
					{data.length > 0 &&
						Object.keys(data[0]).map((key, idx) => {
							if (key !== 'key') return <th key={key}>{key.toUpperCase()}</th>;
						})}
				</tr>
			</thead>
			<tbody>
				{data.map(function (item) {
					return (
						<tr key={item.key}>
							{Object.keys(item).map((key, idx) => {
								if (key !== 'key') return <td key={idx}>{item[key]}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default TableView;

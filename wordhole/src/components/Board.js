/* eslint-disable */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import FlexView from 'react-flexview';
import _ from 'lodash';

export default function Board() {
  const [boxes] = useState([
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ]);

  useEffect(() => {
    // console.log(boxes[0][0]);
    // _.each(boxes, (line) => { 
    //   _.each(line, (box) => {
    //     console.log(box);
    //   });
    // });
    // boxes.map((row) => {
    //   row.map((box) => {
    //     console.log(box + 'a');
    //   });
    // });
  });

  return (
    <FlexView width="100%" hAlignContent="center">
      <FlexView column width="300px" height="600px" hAlignContent="center" style={{marginTop: '20px'}}>
        {boxes.map((row, id) => {
          return (
            <FlexView
              width='300px'
              key={id + 'wbox'}
              style={{ height: '56px', margin: '2px'  }}
              hAlignContent="center"
              vAlignContent="center"
            >
              {row.map((box, idx) => {
                console.log(box, id);
                return (
                  <div
                    key={id + 'wbox' + idx}
                    style={{ width: '56px', height: '56px', border: '0.2rem solid grey', boxSizing: 'border-box', borderRadius: '5px', marginLeft: '2px', marginRight: '2px'}}
                  >
                    <div style={{height: '50px', lineHeight: '50px', textAlign: 'center'}}>{box}</div>
                  </div>
                );
              })}
            </FlexView>
          );
          
        })}
      </FlexView>
    </FlexView>
  );
}



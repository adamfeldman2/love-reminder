import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import ReminderInput from './ReminderInput';
import SaveProgressButton from './SaveProgressButton';

const Reminders = () => {
  const tabStyle = {
    fontSize: '1.05em'
  };

  return (
    <div className="wrapper-component-reminders">
      <Tabs style={tabStyle} s>
        {/* 1-100 */}
        <Tab style={tabStyle} label="1-100">
          <ReminderInput placeholder="Day 1" />
          <ReminderInput placeholder="Day 2" />
          <ReminderInput placeholder="Day 3" />
          <ReminderInput placeholder="Day 4" />
          <ReminderInput placeholder="Day 5" />
          <ReminderInput placeholder="Day 6" />
          <ReminderInput placeholder="Day 7" />
          <ReminderInput placeholder="Day 8" />
          <ReminderInput placeholder="Day 9" />
          <ReminderInput placeholder="Day 10" />
          <ReminderInput placeholder="Day 11" />
          <ReminderInput placeholder="Day 12" />
          <ReminderInput placeholder="Day 13" />
          <ReminderInput placeholder="Day 14" />
          <ReminderInput placeholder="Day 15" />
          <ReminderInput placeholder="Day 16" />
          <ReminderInput placeholder="Day 17" />
          <ReminderInput placeholder="Day 18" />
          <ReminderInput placeholder="Day 19" />
          <ReminderInput placeholder="Day 20" />
          <ReminderInput placeholder="Day 21" />
          <ReminderInput placeholder="Day 22" />
          <ReminderInput placeholder="Day 23" />
          <ReminderInput placeholder="Day 24" />
          <ReminderInput placeholder="Day 25" />
          <ReminderInput placeholder="Day 26" />
          <ReminderInput placeholder="Day 27" />
          <ReminderInput placeholder="Day 28" />
          <ReminderInput placeholder="Day 29" />
          <ReminderInput placeholder="Day 30" />
          <ReminderInput placeholder="Day 31" />
          <ReminderInput placeholder="Day 32" />
          <ReminderInput placeholder="Day 33" />
          <ReminderInput placeholder="Day 34" />
          <ReminderInput placeholder="Day 35" />
          <ReminderInput placeholder="Day 36" />
          <ReminderInput placeholder="Day 37" />
          <ReminderInput placeholder="Day 38" />
          <ReminderInput placeholder="Day 39" />
          <ReminderInput placeholder="Day 40" />
        </Tab>

        {/* 101-200 */}
        <Tab style={tabStyle} label="101-200">
          <ReminderInput placeholder="Day 101" />
          <ReminderInput placeholder="Day 102" />
          <ReminderInput placeholder="Day 103" />
          <ReminderInput placeholder="Day 104" />
          <ReminderInput placeholder="Day 105" />
          <ReminderInput placeholder="Day 106" />
          <ReminderInput placeholder="Day 107" />
          <ReminderInput placeholder="Day 108" />
          <ReminderInput placeholder="Day 109" />
          <ReminderInput placeholder="Day 110" />
          <ReminderInput placeholder="Day 111" />
          <ReminderInput placeholder="Day 112" />
          <ReminderInput placeholder="Day 113" />
          <ReminderInput placeholder="Day 114" />
          <ReminderInput placeholder="Day 115" />
          <ReminderInput placeholder="Day 116" />
          <ReminderInput placeholder="Day 117" />
          <ReminderInput placeholder="Day 118" />
          <ReminderInput placeholder="Day 119" />
          <ReminderInput placeholder="Day 120" />
          <ReminderInput placeholder="Day 121" />
          <ReminderInput placeholder="Day 122" />
          <ReminderInput placeholder="Day 123" />
          <ReminderInput placeholder="Day 124" />
          <ReminderInput placeholder="Day 125" />
          <ReminderInput placeholder="Day 126" />
          <ReminderInput placeholder="Day 127" />
          <ReminderInput placeholder="Day 128" />
          <ReminderInput placeholder="Day 129" />
          <ReminderInput placeholder="Day 130" />
          <ReminderInput placeholder="Day 131" />
          <ReminderInput placeholder="Day 132" />
          <ReminderInput placeholder="Day 133" />
          <ReminderInput placeholder="Day 134" />
          <ReminderInput placeholder="Day 135" />
          <ReminderInput placeholder="Day 136" />
          <ReminderInput placeholder="Day 137" />
          <ReminderInput placeholder="Day 138" />
          <ReminderInput placeholder="Day 139" />
          <ReminderInput placeholder="Day 140" />
        </Tab>

        {/* 201-300 */}
        <Tab style={tabStyle} label="201-300">
          <ReminderInput placeholder="Day 201" />
          <ReminderInput placeholder="Day 202" />
          <ReminderInput placeholder="Day 203" />
          <ReminderInput placeholder="Day 204" />
          <ReminderInput placeholder="Day 205" />
          <ReminderInput placeholder="Day 206" />
          <ReminderInput placeholder="Day 207" />
          <ReminderInput placeholder="Day 208" />
          <ReminderInput placeholder="Day 209" />
          <ReminderInput placeholder="Day 210" />
          <ReminderInput placeholder="Day 211" />
          <ReminderInput placeholder="Day 212" />
          <ReminderInput placeholder="Day 213" />
          <ReminderInput placeholder="Day 214" />
          <ReminderInput placeholder="Day 215" />
          <ReminderInput placeholder="Day 216" />
          <ReminderInput placeholder="Day 217" />
          <ReminderInput placeholder="Day 218" />
          <ReminderInput placeholder="Day 219" />
          <ReminderInput placeholder="Day 220" />
          <ReminderInput placeholder="Day 221" />
          <ReminderInput placeholder="Day 222" />
          <ReminderInput placeholder="Day 223" />
          <ReminderInput placeholder="Day 224" />
          <ReminderInput placeholder="Day 225" />
          <ReminderInput placeholder="Day 226" />
          <ReminderInput placeholder="Day 227" />
          <ReminderInput placeholder="Day 228" />
          <ReminderInput placeholder="Day 229" />
          <ReminderInput placeholder="Day 230" />
          <ReminderInput placeholder="Day 231" />
          <ReminderInput placeholder="Day 232" />
          <ReminderInput placeholder="Day 233" />
          <ReminderInput placeholder="Day 234" />
          <ReminderInput placeholder="Day 235" />
          <ReminderInput placeholder="Day 236" />
          <ReminderInput placeholder="Day 237" />
          <ReminderInput placeholder="Day 238" />
          <ReminderInput placeholder="Day 239" />
          <ReminderInput placeholder="Day 240" />
        </Tab>

        {/* 301-365 */}
        <Tab style={tabStyle} label="201-300">
          <ReminderInput placeholder="Day 301" />
          <ReminderInput placeholder="Day 302" />
          <ReminderInput placeholder="Day 303" />
          <ReminderInput placeholder="Day 304" />
          <ReminderInput placeholder="Day 305" />
          <ReminderInput placeholder="Day 306" />
          <ReminderInput placeholder="Day 307" />
          <ReminderInput placeholder="Day 308" />
          <ReminderInput placeholder="Day 309" />
          <ReminderInput placeholder="Day 310" />
          <ReminderInput placeholder="Day 311" />
          <ReminderInput placeholder="Day 312" />
          <ReminderInput placeholder="Day 313" />
          <ReminderInput placeholder="Day 314" />
          <ReminderInput placeholder="Day 315" />
          <ReminderInput placeholder="Day 316" />
          <ReminderInput placeholder="Day 317" />
          <ReminderInput placeholder="Day 318" />
          <ReminderInput placeholder="Day 319" />
          <ReminderInput placeholder="Day 320" />
          <ReminderInput placeholder="Day 321" />
          <ReminderInput placeholder="Day 322" />
          <ReminderInput placeholder="Day 323" />
          <ReminderInput placeholder="Day 324" />
          <ReminderInput placeholder="Day 325" />
          <ReminderInput placeholder="Day 326" />
          <ReminderInput placeholder="Day 327" />
          <ReminderInput placeholder="Day 328" />
          <ReminderInput placeholder="Day 329" />
          <ReminderInput placeholder="Day 330" />
          <ReminderInput placeholder="Day 331" />
          <ReminderInput placeholder="Day 332" />
          <ReminderInput placeholder="Day 333" />
          <ReminderInput placeholder="Day 334" />
          <ReminderInput placeholder="Day 335" />
          <ReminderInput placeholder="Day 336" />
          <ReminderInput placeholder="Day 337" />
          <ReminderInput placeholder="Day 338" />
          <ReminderInput placeholder="Day 339" />
          <ReminderInput placeholder="Day 340" />
        </Tab>
      </Tabs>

      <SaveProgressButton />
    </div>
  );
};

export default Reminders;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// antd
import { Radio, Switch, Select } from 'antd';
// store
import { actionQuestionSettings } from '../../../../store/start/actions';

function QuestionSettings() {
  const dispatch = useDispatch();
  // get settings data
  const settings = useSelector((state) => state.getIn(['start', 'questionSettings']).toJS());
  // get custom data
  const isCustom = settings.hhc === 'custom';
  /**
   * update hhc
   * @param {event} e
   */
  const updateHhc = (e) => dispatch(actionQuestionSettings({ hhc: e.target.value.split('-')[1] }));
  /**
   * update range, parse string to number
   * @param {event} e
   */
  const updateRange = (e) =>
    dispatch(actionQuestionSettings({ range: +e.target.value.split('-')[1] }));
  /**
   * update switches
   * @param {boolean} checked
   * @param {string} key
   */
  const updateSwitch = (checked, key) => dispatch(actionQuestionSettings({ [key]: checked }));
  /**
   * update dot range
   * @param {string} value
   */
  const updateDotRange = (value) =>
    dispatch(actionQuestionSettings({ dotRange: +value.split('-')[1] }));

  return (
    <div className="question-settings">
      <h3>难度与细节设置</h3>
      <div className="question-settings-item">
        <span>难度</span>
        <Radio.Group value={`hdc-${settings.hhc}`} onChange={updateHhc} buttonStyle="solid">
          <Radio.Button value="hdc-easy">简单</Radio.Button>
          <Radio.Button value="hdc-hard">困难</Radio.Button>
          <Radio.Button value="hdc-custom">自定义</Radio.Button>
        </Radio.Group>
      </div>
      <div className="question-settings-item">
        <span>数值范围「绝对值」</span>
        <Radio.Group
          value={`range-${settings.range}`}
          onChange={updateRange}
          disabled={!isCustom}
          buttonStyle="solid"
        >
          <Radio.Button value="range-10">10</Radio.Button>
          <Radio.Button value="range-100">100</Radio.Button>
          <Radio.Button value="range-1000">1000</Radio.Button>
        </Radio.Group>
        <span>以内</span>
      </div>
      <div className="question-settings-item">
        <div>
          <span>负数</span>
          <Switch
            checked={settings.minus}
            disabled={!isCustom}
            onChange={(checked) => updateSwitch(checked, 'minus')}
            checkedChildren="开启"
            unCheckedChildren="关闭"
          />
        </div>
        <div>
          <span>括号</span>
          <Switch
            checked={settings.bracket}
            disabled={!isCustom}
            onChange={(checked) => updateSwitch(checked, 'bracket')}
            checkedChildren="开启"
            unCheckedChildren="关闭"
          />
        </div>
      </div>
      <div className="question-settings-item">
        <div>
          <span>小数</span>
          <Switch
            checked={settings.dot}
            disabled={!isCustom}
            onChange={(checked) => updateSwitch(checked, 'dot')}
            checkedChildren="开启"
            unCheckedChildren="关闭"
          />
        </div>
        <div>
          <span>小数位数</span>
          <Select disabled={!isCustom} value={`dot-${settings.dotRange}`} onChange={updateDotRange}>
            <Select.Option value="dot-1">1</Select.Option>
            <Select.Option value="dot-2">2</Select.Option>
            <Select.Option value="dot-3">3</Select.Option>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default QuestionSettings;

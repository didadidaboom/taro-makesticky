import { ComponentClass, Component, PropsWithChildren } from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import menu_light from '../../assets/images/icon_menu_light.png'
import menu_dark from '../../assets/images/icon_menu_dark.png'
import back_light from '../../assets/images/icon_back_light.png'
import back_dark from '../../assets/images/icon_back_dark.png'
import './index.less'

type ComponentStateProps = {}

type ComponentOwnProps = {
  type: string,  // icon类型
  theme?: string // 主题
  onClick?: () => void
}
type ComponentState = {}

type IProps = ComponentStateProps & ComponentOwnProps

interface Icon {
  props: IProps;
}

class Icon extends Component<PropsWithChildren> {
  static defaultProps = {
    theme: 'light',
    onClick: () => {}
  }
  handleClick = () => {
    const {onClick} = this.props
    typeof onClick === 'function' && onClick()
  }
  render() {
    const { type, theme } = this.props
    return (
      <View className='icon' onClick={this.handleClick}>
        {type === 'menu' ? <Image class="icon-menu" src={theme === 'light' ? menu_light : menu_dark} mode="scaleToFill" /> : null}
        {type === 'back' ? <Image class="icon-back" src={theme === 'light' ? back_light : back_dark} mode="scaleToFill" /> : null}
      </View>
    )
  }
}

export default Icon

/**
 * Created by fangjin on 2017/8/3.
 */
export class AppConfig{
  public baseUrl:'192.168.1.127/';

  //获取设备高度
  public static getWindowHeight() {
    return window.screen.height;
  }
  //获取设备宽度
  public static getWindowWidth(){
    return window.screen.width;
  }
}

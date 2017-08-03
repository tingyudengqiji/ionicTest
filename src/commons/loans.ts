/**
 * Created by fangjin on 2017/7/26.
 */
export class LoanInfo{
  public loanDescr:string;//标的介绍
  public loanExpiry:number;//产品期限
  public loanAmt:number;//融资金额
  public loanId:string;//标的ID
  public loanArp:string;//预期年化
  public sumPerson:number;//已投人数
  // public expiryUnit:number;
  public price:number;//可投金额
  public safeguardWay:string;//保障方式,抵押类型
  public tempName:string;//借款人姓名
  public minIvst:number;///起投最小
  public maxIvst:number;//最大
  public tempCard:string;//身份证号码
  public tempOne:number;//本金
  public tempTwo:number;//本金＋利息
  public rpmtType:string;//收益方式
  public correlativeCharges:string;//相关费用
  public loanStatus:number;//标地状态
  public loanUserName:string;
}

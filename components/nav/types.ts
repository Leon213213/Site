export default interface HamStatus {
  numRef?: React.MutableRefObject<number>;
  displayNav?: boolean;
  active: boolean;
  setActive: ((value: boolean) => void) | null;
}

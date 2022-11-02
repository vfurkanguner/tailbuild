import LogoImg from "../assets/logo.png";
type Props = {};

export default function Logo({}: Props) {
  return (
    <div>
      <img src={LogoImg} alt="logo" className="w-full h-10" />
    </div>
  );
}

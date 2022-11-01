type ClassNames = {
  [key: string]: boolean;
};

export default function classNames(...args: (ClassNames | string)[]) {
  return args.filter(Boolean).join(" ");
}
  
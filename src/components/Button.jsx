import ButtonSvg from "../assets/svg/ButtonSvg";
import { motion } from "framer-motion";

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
  glow,
  ...props
}) => {
  const classes = `
    button relative inline-flex items-center justify-center h-11 transition-all duration-300
    ${px || "px-7"} 
    ${white ? "text-n-8 dark:text-n-1" : "text-n-1 dark:text-n-8"}
    ${glow ? "hover:shadow-lg hover:shadow-primary-500/20" : ""}
    ${className || ""}
  `;

  const spanClasses = "relative z-10";

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full h-full flex items-center justify-center"
    >
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </motion.span>
  );

  const renderButton = () => (
    <button className={classes} onClick={onClick} {...props}>
      {buttonContent}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} {...props}>
      {buttonContent}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;

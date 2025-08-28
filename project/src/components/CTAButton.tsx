import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = ''
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg group";
  
  const variantClasses = {
  primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-105",
  secondary: "bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white",
   white: "bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl hover:scale-105",
};

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <> 
      <span>{text}</span>
      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </>
  );

  if (href) {
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default CTAButton;
import React from 'react';
import classNames from 'classnames';

const Loader = ({ 
    size = 'md', 
    variant = 'spinner', 
    color = 'primary',
    className = '',
    text = 'Loading...',
    showText = true 
}) => {
    const sizeClasses = {
        xs: 'w-4 h-4',
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
    };

    const colorClasses = {
        primary: 'border-blue-500 text-blue-500',
        secondary: 'border-gray-500 text-gray-500',
        success: 'border-green-500 text-green-500',
        warning: 'border-yellow-500 text-yellow-500',
        danger: 'border-red-500 text-red-500',
        white: 'border-white text-white',
        dark: 'border-gray-800 text-gray-800'
    };

    const textSizeClasses = {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl'
    };

    const renderLoader = () => {
        switch (variant) {
            case 'spinner':
                return (
                    <div className={classNames(
                        'animate-spin rounded-full border-2 border-t-transparent',
                        sizeClasses[size],
                        colorClasses[color]
                    )} />
                );
            
            case 'dots':
                return (
                    <div className="flex space-x-1">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className={classNames(
                                    'rounded-full animate-bounce',
                                    sizeClasses[size].split(' ')[0],
                                    sizeClasses[size].split(' ')[1],
                                    colorClasses[color].split(' ')[1]
                                )}
                                style={{
                                    animationDelay: `${i * 0.1}s`,
                                    animationDuration: '1s'
                                }}
                            />
                        ))}
                    </div>
                );
            
            case 'pulse':
                return (
                    <div className={classNames(
                        'rounded-full animate-pulse',
                        sizeClasses[size],
                        colorClasses[color].split(' ')[1]
                    )} />
                );
            
            case 'bars':
                return (
                    <div className="flex space-x-1 items-end">
                        {[0, 1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className={classNames(
                                    'animate-pulse',
                                    colorClasses[color].split(' ')[1]
                                )}
                                style={{
                                    width: '4px',
                                    height: `${(i + 1) * 8}px`,
                                    animationDelay: `${i * 0.1}s`,
                                    animationDuration: '1s'
                                }}
                            />
                        ))}
                    </div>
                );
            
            case 'ring':
                return (
                    <div className="relative">
                        <div className={classNames(
                            'animate-spin rounded-full border-4 border-t-transparent',
                            sizeClasses[size],
                            colorClasses[color]
                        )} />
                        <div className={classNames(
                            'absolute inset-0 rounded-full border-4 border-transparent border-t-current animate-ping',
                            sizeClasses[size],
                            colorClasses[color].split(' ')[1]
                        )} />
                    </div>
                );
            
            default:
                return (
                    <div className={classNames(
                        'animate-spin rounded-full border-2 border-t-transparent',
                        sizeClasses[size],
                        colorClasses[color]
                    )} />
                );
        }
    };

    return (
        <div className={classNames(
            'flex flex-col items-center justify-center space-y-3',
            'min-h-[100px] w-full',
            className
        )}>
            {renderLoader()}
            
            {showText && text && (
                <p className={classNames(
                    'text-center font-medium',
                    textSizeClasses[size],
                    colorClasses[color].split(' ')[1]
                )}>
                    {text}
                </p>
            )}
        </div>
    );
};

export default Loader;

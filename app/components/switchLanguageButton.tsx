import { motion, spring } from 'motion/react'
import { type FC, useState } from 'react'
import ShimmerButton from './subcomponents/shimmerButton'

interface SwitchLanguageButtonProps {
    content: React.ReactNode
    title?: string
    handleClick: React.MouseEventHandler<HTMLDivElement>
    tile?: boolean
    background?: string
    backgroundHovered?: string
    loadingIndex?: number
    borderless?: boolean
    description?: string
}

const layoutTransition = {
    type: 'spring',
    stiffness: 150,
    damping: 15
} as const

const SwitchLanguageButton: FC<SwitchLanguageButtonProps> = ({
    content,
    title = undefined,
    handleClick,
    tile = false,
    background = 'rgb(32,32,32)',
    backgroundHovered = 'rgb(55,55,55)',
    loadingIndex = 0,
    borderless = false,
    description = ''
}) => {


    var tileContent = <div>{content}</div>


    return (
        <motion.div
            layoutId={title}
            transition={layoutTransition}
            className='card cursor-pointer'
        >
            <ShimmerButton
                content={tileContent}
                title={title}
                handleClick={handleClick}
                tile={tile}
                background={background}
                backgroundHovered={backgroundHovered}
                loadingIndex={loadingIndex}
                borderless={borderless}
                description={description}
            />
        </motion.div>
    )
}

export default SwitchLanguageButton

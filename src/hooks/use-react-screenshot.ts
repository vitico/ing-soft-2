import React, { useState } from 'react'
import html2canvas from 'html2canvas'


const useScreenshot = ({ type, quality }: {
    type?: 'image/png' | 'image/jpeg' | 'image/webp'
    quality?: number
} = {}): [string | undefined, (node: HTMLElement) => Promise<string | void>, { error: Error | undefined }] => {
    const [image, setImage] = useState<string | undefined>(undefined)
    const [error, setError] = useState<Error | undefined>(undefined)

    const takeScreenShot = React.useCallback(async (node: HTMLElement) => {
        if (!node) {
            throw new Error('You should provide correct html node.')
        }
        return html2canvas(node)
            .then((canvas: HTMLCanvasElement) => {
                const croppedCanvas = document.createElement('canvas')
                const croppedCanvasContext = croppedCanvas.getContext('2d')!
                // init data
                const cropPositionTop = 0
                const cropPositionLeft = 0
                const cropWidth = canvas.width
                const cropHeight = canvas.height

                croppedCanvas.width = cropWidth
                croppedCanvas.height = cropHeight

                croppedCanvasContext.drawImage(
                    canvas,
                    cropPositionLeft,
                    cropPositionTop,
                )

                const base64Image = croppedCanvas.toDataURL(type, quality)

                setImage(base64Image)
                return base64Image
            })
            .catch(setError)
    }, [type, quality]);

    return [
        image,
        takeScreenShot,
        {
            error,
        },
    ]
}

/**
 * creates name of file
 * @param {string} extension
 * @param  {string[]} parts of file name
 */
const createFileName = (extension = '', ...names: any[]) => {
    if (!extension) {
        return ''
    }

    return `${names.join('')}.${extension}`
}

export { useScreenshot, createFileName }
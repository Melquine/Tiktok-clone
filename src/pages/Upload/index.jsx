import { useDropzone } from 'react-dropzone'
import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { publishVideo, uploadVideo } from '../../services/supabase';

export default function Upload() {
    const [uploading, setUploading] = useState(false)
    const [uploaded, setUploaded] = useState(null)
    const [description, setDescription] = useState('')

    const onDrop = async (files) => {
        const [file] = files;
        setUploading(true)
        const [error, fileUrl] = await uploadVideo({ videoFile: file})
        if(error) return console.log(error)
        setUploaded(fileUrl)
        setUploading(false)
      }
    const { isDragAccept, isDragReject, getRootProps, getInputProps } =
    useDropzone({
        disabled: uploading || uploaded,
        maxFiles: 1,
        accept: {
            'video/*': ['.mp4']
        },
      onDrop,
    });

    useEffect(() => {
        if(isDragReject) navigator.vibrate(100)
    }, [isDragReject])

    const dndClassNames = clsx(styles.dnd, {
        [styles.uploaded]: uploading,
        [styles.uploading && !styles.uploaded]: uploading,
        [styles.dndReject]: isDragReject,
        [styles.dndAccept]: isDragAccept,
    })
    const renderDndContent = () => {
        if(!uploading) return <h4>Archivo cargado con exito</h4>
        if(uploading) return <h4>Subiendo archivo...</h4>
        if(isDragReject) return <h4>Archivo no soportado</h4>
        if(isDragAccept) return <h4>Suelta el archivo para subirlo</h4>
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if (!uploaded) return;
    
        const description = evt.target.description.value;
        const [error] = await publishVideo({ videoSrc: uploaded, description });
    
        if (error) return console.error(error);
        else console.log("video published!!!");
    }

    return (
        <div className={styles.upload}>
            <h1>Upload video</h1>
            <p>Este video se publicara en el perfil @melqui</p>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />

                    <div className={dndClassNames}>
                    <img
                        src="https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/cloud_icon-6e07be44878e69ee3f7bff3b78405b76.svg"
                        width="49"
                    />
                    {renderDndContent()}
                </div>
                </div>

                <label>
                    Leyenda
                    <input name='description' type='text' placeholder='' />
                </label>

                <button>Publicar</button>
            </form>
        </div>
    )
}
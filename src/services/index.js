import { supabase } from './supabase.js'

const prefix = import.meta.env.VITE_SUPABASE_STORAGE_URL

export const uploadVideo = async ({ videoFile }) => {
    const filename = window.crypto.randomUUID()
    const { data, error } = await supabase.storage
        .from('videos')
        .upload(`uploads/${filename}.mp4`, videoFile)
    
    const fileUrl = data?.id ? `${prefix}${data.fullPath}` : ''
    return [error, fileUrl]
}

export const publishVideo = async ({ videoSrc, description }) => {
    const defaultAlbum = '/src/assets/coverimage.png'
    const defaultSong = 'song name'
    const { data, error } = await supabase
        .from('videos')
        .insert([
            {
                user_id: 'efa4e51f-e0dc-46d8-baaf-98e7bf84c4bd',
                description,
                albumCover: defaultAlbum,
                songTitle: defaultSong,
                src: videoSrc
            }
        ])
    
    return [error, data]
        
}

export const getVideos = async () => {
    const {data, error } = await supabase
        .from('videos')
        .select(`*, user:user_id (
            avatar,
            username,
            id
            )`).order('created_at', { ascending: false })
    return [error, data]
}
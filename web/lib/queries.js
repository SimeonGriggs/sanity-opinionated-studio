import {groq} from 'next-sanity'

export const articleQuery = groq`
  *[_type == "article" && slug.current == $slug] {
    ...,
    content[] {
        ...,
        _type == "videoEmbed" => { video-> },
        _type == "button" => { ..., link {
            ...,
            "reference": reference->slug.current,
            }
        }, 
        _type == "pageBuilderHero" => { 
            ..., 
            "authors": ^.authors[]->
        },
    }
  }
`

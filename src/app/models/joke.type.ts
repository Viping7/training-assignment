type JokeType = "single" | "twopart";

export type Category = "Pun" | "Programming" 
type Flags = {
    "nsfw": boolean,
    "religious": boolean,
    "political": boolean,
    "racist": boolean,
    "sexist": boolean,
    "explicit": boolean
}

export type Joke = {
    "error": boolean,
    "category": Category,
    "type": JokeType,
    "setup": string,
    "delivery": string,
    "flags": Flags,
    "safe": boolean,
    "id": number,
    "lang": string
}

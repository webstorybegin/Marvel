export class MarvelService {
  _apiBase = "https://gateway.marvel.com:443/v1/public/";
  _apiKey = "apikey=9312b916a65e5963f899dffa609ded63";

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResource(
      `${this._apiBase}characters?limit=9&offset=310&${this._apiKey}`
    );
    console.log(res)
    return res.data.results.map(this._transformChar);
  };

  getCharacter = async (id) => {
    const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    return this._transformChar(res.data.results[0]);
  };

  _transformChar = (char) => {
    return {
      name: char.name,
      descrtiption: char.description
        ? `${char.description.slice(0, 210)}...`
        : "There is no description of this character",
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
    };
  };
}

class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet, statistics',
        chart: 'mostPopular',
        maxResults: 24,
      },
    });
    return response.data.items;
  }

  async search(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 24,
        type: 'video',
        q: query,
      },
    });
    return response.data.items.map((item) => ({...item, id: item.id.videoId}));
  }
}

export default Youtube;

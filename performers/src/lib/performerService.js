const baseUrl = "https://mobile-staging.gametime.co/v1/performers";

const baseFetch = () => fetch(baseUrl).then(resp => resp.json());

export const loadPerformers = () =>
  baseFetch().then(resp => {
    return resp.performers.map(p => ({
      ...p,
      key: p.id
    }));
  });

export const getDescricao = (descricao: string) => {
  if (descricao.length > 95) {
    return descricao.slice(0, 92) + "...";
  }
  return descricao;
};

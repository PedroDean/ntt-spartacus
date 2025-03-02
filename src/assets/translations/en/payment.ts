export const payment = {
  paymentForm: {
    payment: 'Pagamento',
    choosePaymentMethod: 'Escolha um método de pagamento',
    paymentType: 'Tipo de Pagamento',
    accountHolderName: {
      label: 'Nome do Titular da Conta',
      placeholder: 'Nome do Titular da Conta',
    },
    cardNumber: 'Número do Cartão',
    expirationDate: 'Data de Expiração',
    securityCode: 'Código de Segurança (CVV)',
    securityCodeTitle: 'Valor de Verificação do Cartão',
    saveAsDefault: 'Salvar como padrão',
    setAsDefault: 'Definir como padrão',
    billingAddress: 'Endereço de Cobrança',
    sameAsShippingAddress: 'Mesmo que o endereço de entrega',
    selectOne: 'Selecione Um...',
    monthMask: 'MM',
    yearMask: 'AAAA',
    expirationYear: 'Ano de Expiração {{ selected }}',
    expirationMonth: 'Mês de Expiração {{ selected }}',
    useThisPayment: 'Usar este pagamento',
    addNewPayment: 'Adicionar Novo Pagamento',
    changePayment: 'Alterar Pagamento',
  },
  paymentMethods: {
    paymentMethods: 'Métodos de Pagamento',
    newPaymentMethodsAreAddedDuringCheckout:
      'Novos métodos de pagamento são adicionados durante o checkout.',
    invalidField: 'Campo Inválido: {{ field }}',
  },
  paymentCard: {
    deleteConfirmation: 'Tem certeza de que deseja excluir este método de pagamento?',
    setAsDefault: 'Definir como padrão',
    expires: 'Expira: {{ month }}/{{ year }}',
    defaultPaymentMethod: '✓ PADRÃO',
    selected: 'Selecionado',
  },
  paymentTypes: {
    title: 'Método de Pagamento',
    paymentType_CARD: 'Cartão de Crédito',
    paymentType_ACCOUNT: 'Conta',
  },
  
};

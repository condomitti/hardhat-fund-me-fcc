/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
    Contract,
    ContractFactory,
    ContractTransactionResponse,
    Interface,
} from "ethers";
import type {
    Signer,
    BigNumberish,
    ContractDeployTransaction,
    ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../../../common";
import type {
    MockV3Aggregator,
    MockV3AggregatorInterface,
} from "../../../../../../@chainlink/contracts/src/v0.6/tests/MockV3Aggregator";

const _abi = [
    {
        inputs: [
            {
                internalType: "uint8",
                name: "_decimals",
                type: "uint8",
            },
            {
                internalType: "int256",
                name: "_initialAnswer",
                type: "int256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "int256",
                name: "current",
                type: "int256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "roundId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "updatedAt",
                type: "uint256",
            },
        ],
        name: "AnswerUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "roundId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "startedBy",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "startedAt",
                type: "uint256",
            },
        ],
        name: "NewRound",
        type: "event",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "description",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "getAnswer",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint80",
                name: "_roundId",
                type: "uint80",
            },
        ],
        name: "getRoundData",
        outputs: [
            {
                internalType: "uint80",
                name: "roundId",
                type: "uint80",
            },
            {
                internalType: "int256",
                name: "answer",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "startedAt",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "updatedAt",
                type: "uint256",
            },
            {
                internalType: "uint80",
                name: "answeredInRound",
                type: "uint80",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "getTimestamp",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "latestAnswer",
        outputs: [
            {
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "latestRound",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "latestRoundData",
        outputs: [
            {
                internalType: "uint80",
                name: "roundId",
                type: "uint80",
            },
            {
                internalType: "int256",
                name: "answer",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "startedAt",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "updatedAt",
                type: "uint256",
            },
            {
                internalType: "uint80",
                name: "answeredInRound",
                type: "uint80",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "latestTimestamp",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "_answer",
                type: "int256",
            },
        ],
        name: "updateAnswer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint80",
                name: "_roundId",
                type: "uint80",
            },
            {
                internalType: "int256",
                name: "_answer",
                type: "int256",
            },
            {
                internalType: "uint256",
                name: "_timestamp",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_startedAt",
                type: "uint256",
            },
        ],
        name: "updateRoundData",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "version",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
] as const;

const _bytecode =
    "0x608060405234801561001057600080fd5b506040516107743803806107748339818101604052604081101561003357600080fd5b810190808051906020019092919080519060200190929190505050816000806101000a81548160ff021916908360ff1602179055506100778161007e60201b60201c565b50506100ef565b806001819055504260028190555060036000815480929190600101919050555080600460006003548152602001908152602001600020819055504260056000600354815260200190815260200160002081905550426006600060035481526020019081526020016000208190555050565b610676806100fe6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638205bf6a116100715780638205bf6a146102125780639a6fc8f514610230578063a87a20ce146102ca578063b5ab58dc146102f8578063b633620c1461033a578063feaf968c1461037c576100b4565b8063313ce567146100b95780634aa2011f146100dd57806350d25bcd1461013557806354fd4d5014610153578063668a0f02146101715780637284e4161461018f575b600080fd5b6100c16103e6565b604051808260ff1660ff16815260200191505060405180910390f35b610133600480360360808110156100f357600080fd5b81019080803569ffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803590602001909291905050506103f8565b005b61013d61046d565b6040518082815260200191505060405180910390f35b61015b610473565b6040518082815260200191505060405180910390f35b610179610478565b6040518082815260200191505060405180910390f35b61019761047e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d75780820151818401526020810190506101bc565b50505050905090810190601f1680156102045780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61021a6104bb565b6040518082815260200191505060405180910390f35b6102686004803603602081101561024657600080fd5b81019080803569ffffffffffffffffffff1690602001909291905050506104c1565b604051808669ffffffffffffffffffff1669ffffffffffffffffffff1681526020018581526020018481526020018381526020018269ffffffffffffffffffff1669ffffffffffffffffffff1681526020019550505050505060405180910390f35b6102f6600480360360208110156102e057600080fd5b810190808035906020019092919050505061053e565b005b6103246004803603602081101561030e57600080fd5b81019080803590602001909291905050506105af565b6040518082815260200191505060405180910390f35b6103666004803603602081101561035057600080fd5b81019080803590602001909291905050506105c7565b6040518082815260200191505060405180910390f35b6103846105df565b604051808669ffffffffffffffffffff1669ffffffffffffffffffff1681526020018581526020018481526020018381526020018269ffffffffffffffffffff1669ffffffffffffffffffff1681526020019550505050505060405180910390f35b6000809054906101000a900460ff1681565b8369ffffffffffffffffffff16600381905550826001819055508160028190555082600460006003548152602001908152602001600020819055508160056000600354815260200190815260200160002081905550806006600060035481526020019081526020016000208190555050505050565b60015481565b600081565b60035481565b60606040518060400160405280601f81526020017f76302e362f74657374732f4d6f636b563341676772656761746f722e736f6c00815250905090565b60025481565b600080600080600085600460008869ffffffffffffffffffff16815260200190815260200160002054600660008969ffffffffffffffffffff16815260200190815260200160002054600560008a69ffffffffffffffffffff16815260200190815260200160002054899450945094509450945091939590929450565b806001819055504260028190555060036000815480929190600101919050555080600460006003548152602001908152602001600020819055504260056000600354815260200190815260200160002081905550426006600060035481526020019081526020016000208190555050565b60046020528060005260406000206000915090505481565b60056020528060005260406000206000915090505481565b600080600080600060035460046000600354815260200190815260200160002054600660006003548152602001908152602001600020546005600060035481526020019081526020016000205460035494509450945094509450909192939456fea26469706673582212204bfb355c4fa84d83ffd950e42957883f721f8085f959fd4cb67185b9f1695a0364736f6c63430006060033";

type MockV3AggregatorConstructorParams =
    | [signer?: Signer]
    | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
    xs: MockV3AggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockV3Aggregator__factory extends ContractFactory {
    constructor(...args: MockV3AggregatorConstructorParams) {
        if (isSuperArgs(args)) {
            super(...args);
        } else {
            super(_abi, _bytecode, args[0]);
        }
    }

    override getDeployTransaction(
        _decimals: BigNumberish,
        _initialAnswer: BigNumberish,
        overrides?: NonPayableOverrides & { from?: string }
    ): Promise<ContractDeployTransaction> {
        return super.getDeployTransaction(
            _decimals,
            _initialAnswer,
            overrides || {}
        );
    }
    override deploy(
        _decimals: BigNumberish,
        _initialAnswer: BigNumberish,
        overrides?: NonPayableOverrides & { from?: string }
    ) {
        return super.deploy(
            _decimals,
            _initialAnswer,
            overrides || {}
        ) as Promise<
            MockV3Aggregator & {
                deploymentTransaction(): ContractTransactionResponse;
            }
        >;
    }
    override connect(runner: ContractRunner | null): MockV3Aggregator__factory {
        return super.connect(runner) as MockV3Aggregator__factory;
    }

    static readonly bytecode = _bytecode;
    static readonly abi = _abi;
    static createInterface(): MockV3AggregatorInterface {
        return new Interface(_abi) as MockV3AggregatorInterface;
    }
    static connect(
        address: string,
        runner?: ContractRunner | null
    ): MockV3Aggregator {
        return new Contract(
            address,
            _abi,
            runner
        ) as unknown as MockV3Aggregator;
    }
}

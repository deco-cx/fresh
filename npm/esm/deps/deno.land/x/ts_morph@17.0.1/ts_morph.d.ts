export { default as CodeBlockWriter } from "../code_block_writer@11.0.3/mod.js";
export function AbstractableNode(Base: any): {
    new (): {
        [x: string]: any;
        isAbstract(): boolean;
        getAbstractKeyword(): any;
        getAbstractKeywordOrThrow(message: any): any;
        setIsAbstract(isAbstract: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export function AmbientableNode(Base: any): {
    new (): {
        [x: string]: any;
        hasDeclareKeyword(): boolean;
        getDeclareKeywordOrThrow(message: any): any;
        getDeclareKeyword(): any;
        isAmbient(): boolean;
        setHasDeclareKeyword(value: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export const ArgumentError: typeof errors.ArgumentError;
export const ArgumentNullOrWhitespaceError: typeof errors.ArgumentNullOrWhitespaceError;
export const ArgumentOutOfRangeError: typeof errors.ArgumentOutOfRangeError;
export const ArgumentTypeError: typeof errors.ArgumentTypeError;
export function ArgumentedNode(Base: any): {
    new (): {
        [x: string]: any;
        getArguments(): any;
        addArgument(argumentText: any): any;
        addArguments(argumentTexts: any): any[];
        insertArgument(index: any, argumentText: any): any;
        insertArguments(index: any, argumentTexts: any): any[];
        removeArgument(argOrIndex: any): any;
        _addParensIfNecessary(): void;
    };
    [x: string]: any;
};
export class ArrayBindingPattern extends Node {
    getElements(): any;
}
export class ArrayDestructuringAssignment extends AssignmentExpression {
}
export const ArrayDestructuringAssignmentBase: typeof AssignmentExpression;
export class ArrayLiteralExpression extends PrimaryExpression {
    getElements(): any;
    addElement(textOrWriterFunction: any, options: any): any;
    addElements(textsOrWriterFunction: any, options: any): any[];
    insertElement(index: any, textOrWriterFunction: any, options: any): any;
    insertElements(index: any, textsOrWriterFunction: any, options?: {}): any[];
    removeElement(elementOrIndex: any): void;
}
export class ArrayTypeNode extends TypeNode {
    getElementTypeNode(): any;
}
declare const ArrowFunction_base: {
    new (): {
        [x: string]: any;
        insertText(pos: any, textOrWriterFunction: any): any;
        removeText(pos: any, end: any): any;
        replaceText(range: any, textOrWriterFunction: any): any;
    };
    [x: string]: any;
};
export class ArrowFunction extends ArrowFunction_base {
    getEqualsGreaterThan(): any;
}
export const ArrowFunctionBase: {
    new (): {
        [x: string]: any;
        insertText(pos: any, textOrWriterFunction: any): any;
        removeText(pos: any, end: any): any;
        replaceText(range: any, textOrWriterFunction: any): any;
    };
    [x: string]: any;
};
declare const AsExpression_base: {
    new (): {
        [x: string]: any;
        getTypeNode(): any;
        getTypeNodeOrThrow(message: any): any;
        setType(textOrWriterFunction: any): any;
        set(structure: any): any;
        removeType(): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class AsExpression extends AsExpression_base {
}
export const AsExpressionBase: {
    new (): {
        [x: string]: any;
        getTypeNode(): any;
        getTypeNodeOrThrow(message: any): any;
        setType(textOrWriterFunction: any): any;
        set(structure: any): any;
        removeType(): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class AssertClause extends Node {
    setElements(elements: any): AssertClause;
    getElements(): any;
    remove(): void;
}
export const AssertClauseBase: typeof Node;
declare const AssertEntry_base: {
    new (): {
        [x: string]: any;
        getNameNode(): any;
        getName(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class AssertEntry extends AssertEntry_base {
    getValue(): any;
    set(structure: any): AssertEntry;
}
export const AssertEntryBase: {
    new (): {
        [x: string]: any;
        getNameNode(): any;
        getName(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export function AssertionKeyNamedNode(Base: any): {
    new (): {
        [x: string]: any;
        getNameNode(): any;
        getName(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class AssignmentExpression extends BinaryExpression {
}
export const AssignmentExpressionBase: typeof BinaryExpression;
export function AsyncableNode(Base: any): {
    new (): {
        [x: string]: any;
        isAsync(): any;
        getAsyncKeyword(): any;
        getAsyncKeywordOrThrow(message: any): any;
        setIsAsync(value: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const AwaitExpression_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class AwaitExpression extends AwaitExpression_base {
}
export const AwaitExpressionBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export function AwaitableNode(Base: any): {
    new (): {
        [x: string]: any;
        isAwaited(): boolean;
        getAwaitKeyword(): any;
        getAwaitKeywordOrThrow(message: any): any;
        setIsAwaited(value: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export const BaseError: typeof errors.BaseError;
export function BaseExpressionedNode(Base: any): {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class BigIntLiteral extends LiteralExpression {
    getLiteralValue(): bigint;
    setLiteralValue(value: any): BigIntLiteral;
}
export const BigIntLiteralBase: typeof LiteralExpression;
export class BinaryExpression extends Expression {
    getLeft(): any;
    getOperatorToken(): any;
    getRight(): any;
}
export const BinaryExpressionBase: typeof Expression;
declare const BindingElement_base: {
    new (): {
        [x: string]: any;
        getDotDotDotTokenOrThrow(message: any): any;
        getDotDotDotToken(): any;
    };
    [x: string]: any;
};
export class BindingElement extends BindingElement_base {
    getPropertyNameNodeOrThrow(message: any): any;
    getPropertyNameNode(): any;
}
export const BindingElementBase: {
    new (): {
        [x: string]: any;
        getDotDotDotTokenOrThrow(message: any): any;
        getDotDotDotToken(): any;
    };
    [x: string]: any;
};
export function BindingNamedNode(Base: any): {
    new (): {
        [x: string]: any;
        getNameNode(): any;
        getName(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const Block_base: {
    new (): {
        [x: string]: any;
        insertText(pos: any, textOrWriterFunction: any): any;
        removeText(pos: any, end: any): any;
        replaceText(range: any, textOrWriterFunction: any): any;
    };
    [x: string]: any;
};
export class Block extends Block_base {
}
export const BlockBase: {
    new (): {
        [x: string]: any;
        insertText(pos: any, textOrWriterFunction: any): any;
        removeText(pos: any, end: any): any;
        replaceText(range: any, textOrWriterFunction: any): any;
    };
    [x: string]: any;
};
export function BodiedNode(Base: any): {
    new (): {
        [x: string]: any;
        getBody(): any;
        setBodyText(textOrWriterFunction: any): any;
        getBodyText(): string;
    };
    [x: string]: any;
};
export function BodyableNode(Base: any): {
    new (): {
        [x: string]: any;
        getBodyOrThrow(message: any): any;
        getBody(): any;
        getBodyText(): string | undefined;
        setBodyText(textOrWriterFunction: any): any;
        hasBody(): boolean;
        addBody(): any;
        removeBody(): any;
    };
    [x: string]: any;
};
export class BreakStatement extends Statement {
    getLabel(): any;
    getLabelOrThrow(message: any): any;
}
declare const CallExpression_base: {
    new (): {
        [x: string]: any;
        getTypeArguments(): any;
        addTypeArgument(argumentText: any): any;
        addTypeArguments(argumentTexts: any): any[];
        insertTypeArgument(index: any, argumentText: any): any;
        insertTypeArguments(index: any, argumentTexts: any): any[];
        removeTypeArgument(typeArgOrIndex: any): any;
    };
    [x: string]: any;
};
export class CallExpression extends CallExpression_base {
    getReturnType(): any;
}
export const CallExpressionBase: {
    new (): {
        [x: string]: any;
        getTypeArguments(): any;
        addTypeArgument(argumentText: any): any;
        addTypeArguments(argumentTexts: any): any[];
        insertTypeArgument(index: any, argumentText: any): any;
        insertTypeArguments(index: any, argumentTexts: any): any[];
        removeTypeArgument(typeArgOrIndex: any): any;
    };
    [x: string]: any;
};
declare const CallSignatureDeclaration_base: {
    new (): {
        [x: string]: any;
        getTypeParameter(nameOrFindFunction: any): any;
        getTypeParameterOrThrow(nameOrFindFunction: any): any;
        getTypeParameters(): any;
        addTypeParameter(structure: any): any;
        addTypeParameters(structures: any): any[];
        insertTypeParameter(index: any, structure: any): any;
        insertTypeParameters(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class CallSignatureDeclaration extends CallSignatureDeclaration_base {
}
export const CallSignatureDeclarationBase: {
    new (): {
        [x: string]: any;
        getTypeParameter(nameOrFindFunction: any): any;
        getTypeParameterOrThrow(nameOrFindFunction: any): any;
        getTypeParameters(): any;
        addTypeParameter(structure: any): any;
        addTypeParameters(structures: any): any[];
        insertTypeParameter(index: any, structure: any): any;
        insertTypeParameters(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const CaseBlock_base: {
    new (): {
        [x: string]: any;
        insertText(pos: any, textOrWriterFunction: any): any;
        removeText(pos: any, end: any): any;
        replaceText(range: any, textOrWriterFunction: any): any;
    };
    [x: string]: any;
};
export class CaseBlock extends CaseBlock_base {
    getClauses(): any;
    removeClause(index: any): CaseBlock;
    removeClauses(indexRange: any): CaseBlock;
}
export const CaseBlockBase: {
    new (): {
        [x: string]: any;
        insertText(pos: any, textOrWriterFunction: any): any;
        removeText(pos: any, end: any): any;
        replaceText(range: any, textOrWriterFunction: any): any;
    };
    [x: string]: any;
};
declare const CaseClause_base: {
    new (): {
        [x: string]: any;
        getJsDocs(): any;
        addJsDoc(structure: any): any;
        addJsDocs(structures: any): any[];
        insertJsDoc(index: any, structure: any): any;
        insertJsDocs(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class CaseClause extends CaseClause_base {
    remove(): void;
}
export const CaseClauseBase: {
    new (): {
        [x: string]: any;
        getJsDocs(): any;
        addJsDoc(structure: any): any;
        addJsDocs(structures: any): any[];
        insertJsDoc(index: any, structure: any): any;
        insertJsDocs(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class CatchClause extends Node {
    getBlock(): any;
    getVariableDeclaration(): any;
    getVariableDeclarationOrThrow(message: any): any;
}
export const CatchClauseBase: typeof Node;
export function ChildOrderableNode(Base: any): {
    new (): {
        [x: string]: any;
        setOrder(order: any): any;
    };
    [x: string]: any;
};
declare const ClassDeclaration_base: {
    new (): {
        [x: string]: any;
        getParentModuleOrThrow(message: any): any;
        getParentModule(): any;
    };
    [x: string]: any;
};
export class ClassDeclaration extends ClassDeclaration_base {
    set(structure: any): ClassDeclaration;
    getStructure(): any;
    extractInterface(name: any): {
        kind: any;
        name: any;
        docs: any;
        typeParameters: any;
        properties: any[];
        methods: {
            kind: any;
            docs: any;
            name: any;
            hasQuestionToken: any;
            returnType: any;
            parameters: any;
            typeParameters: any;
        }[];
    };
    extractStaticInterface(name: any): {
        kind: any;
        name: any;
        properties: any[];
        methods: {
            kind: any;
            docs: any;
            name: any;
            hasQuestionToken: any;
            returnType: any;
            parameters: any;
            typeParameters: any;
        }[];
        constructSignatures: {
            kind: any;
            docs: any;
            parameters: any;
            returnType: any;
        }[];
    };
}
export const ClassDeclarationBase: {
    new (): {
        [x: string]: any;
        getParentModuleOrThrow(message: any): any;
        getParentModule(): any;
    };
    [x: string]: any;
};
export class ClassElement extends Node {
    remove(): void;
}
declare const ClassExpression_base: {
    new (): {
        [x: string]: any;
        setExtends(text: any): any;
        removeExtends(): any;
        getExtendsOrThrow(message: any): any;
        getExtends(): any;
        addMembers(members: any): any[];
        addMember(member: any): any;
        insertMember(index: any, member: any): any;
        insertMembers(index: any, members: any): any[];
        addConstructor(structure?: {}): any;
        addConstructors(structures: any): any[];
        insertConstructor(index: any, structure?: {}): any;
        insertConstructors(index: any, structures: any): any[];
        getConstructors(): any;
        addStaticBlock(structure?: {}): any;
        addStaticBlocks(structures: any): any[];
        insertStaticBlock(index: any, structure?: {}): any;
        insertStaticBlocks(index: any, structures: any): any[];
        getStaticBlocks(): any;
        addGetAccessor(structure: any): any;
        addGetAccessors(structures: any): any[];
        insertGetAccessor(index: any, structure: any): any;
        insertGetAccessors(index: any, structures: any): any[];
        addSetAccessor(structure: any): any;
        addSetAccessors(structures: any): any[];
        insertSetAccessor(index: any, structure: any): any;
        insertSetAccessors(index: any, structures: any): any[];
        addProperty(structure: any): any;
        addProperties(structures: any): any[];
        insertProperty(index: any, structure: any): any;
        insertProperties(index: any, structures: any): any[];
        addMethod(structure: any): any;
        addMethods(structures: any): any[];
        insertMethod(index: any, structure: any): any;
        insertMethods(index: any, structures: any): any[];
        getInstanceProperty(nameOrFindFunction: any): any;
        getInstancePropertyOrThrow(nameOrFindFunction: any): any;
        getInstanceProperties(): any;
        getStaticProperty(nameOrFindFunction: any): any;
        getStaticPropertyOrThrow(nameOrFindFunction: any): any;
        getStaticProperties(): any;
        getProperty(nameOrFindFunction: any): any;
        getPropertyOrThrow(nameOrFindFunction: any): any;
        getProperties(): any;
        getGetAccessor(nameOrFindFunction: any): any;
        getGetAccessorOrThrow(nameOrFindFunction: any): any;
        getGetAccessors(): any;
        getSetAccessor(nameOrFindFunction: any): any;
        getSetAccessorOrThrow(nameOrFindFunction: any): any;
        getSetAccessors(): any;
        getMethod(nameOrFindFunction: any): any;
        getMethodOrThrow(nameOrFindFunction: any): any;
        getMethods(): any;
        getInstanceMethod(nameOrFindFunction: any): any;
        getInstanceMethodOrThrow(nameOrFindFunction: any): any;
        getInstanceMethods(): any;
        getStaticMethod(nameOrFindFunction: any): any;
        getStaticMethodOrThrow(nameOrFindFunction: any): any;
        getStaticMethods(): any;
        getInstanceMember(nameOrFindFunction: any): any;
        getInstanceMemberOrThrow(nameOrFindFunction: any): any;
        getInstanceMembers(): any;
        getStaticMember(nameOrFindFunction: any): any;
        getStaticMemberOrThrow(nameOrFindFunction: any): any;
        getStaticMembers(): any;
        getMembersWithParameterProperties(): any;
        getMembers(): any;
        getMembersWithComments(): any;
        getMember(nameOrFindFunction: any): any;
        getMemberOrThrow(nameOrFindFunction: any): any;
        getBaseTypes(): any;
        getBaseClassOrThrow(message: any): any;
        getBaseClass(): any;
        getDerivedClasses(): any[];
    };
    [x: string]: any;
};
export class ClassExpression extends ClassExpression_base {
}
export const ClassExpressionBase: {
    new (): {
        [x: string]: any;
        setExtends(text: any): any;
        removeExtends(): any;
        getExtendsOrThrow(message: any): any;
        getExtends(): any;
        addMembers(members: any): any[];
        addMember(member: any): any;
        insertMember(index: any, member: any): any;
        insertMembers(index: any, members: any): any[];
        addConstructor(structure?: {}): any;
        addConstructors(structures: any): any[];
        insertConstructor(index: any, structure?: {}): any;
        insertConstructors(index: any, structures: any): any[];
        getConstructors(): any;
        addStaticBlock(structure?: {}): any;
        addStaticBlocks(structures: any): any[];
        insertStaticBlock(index: any, structure?: {}): any;
        insertStaticBlocks(index: any, structures: any): any[];
        getStaticBlocks(): any;
        addGetAccessor(structure: any): any;
        addGetAccessors(structures: any): any[];
        insertGetAccessor(index: any, structure: any): any;
        insertGetAccessors(index: any, structures: any): any[];
        addSetAccessor(structure: any): any;
        addSetAccessors(structures: any): any[];
        insertSetAccessor(index: any, structure: any): any;
        insertSetAccessors(index: any, structures: any): any[];
        addProperty(structure: any): any;
        addProperties(structures: any): any[];
        insertProperty(index: any, structure: any): any;
        insertProperties(index: any, structures: any): any[];
        addMethod(structure: any): any;
        addMethods(structures: any): any[];
        insertMethod(index: any, structure: any): any;
        insertMethods(index: any, structures: any): any[];
        getInstanceProperty(nameOrFindFunction: any): any;
        getInstancePropertyOrThrow(nameOrFindFunction: any): any;
        getInstanceProperties(): any;
        getStaticProperty(nameOrFindFunction: any): any;
        getStaticPropertyOrThrow(nameOrFindFunction: any): any;
        getStaticProperties(): any;
        getProperty(nameOrFindFunction: any): any;
        getPropertyOrThrow(nameOrFindFunction: any): any;
        getProperties(): any;
        getGetAccessor(nameOrFindFunction: any): any;
        getGetAccessorOrThrow(nameOrFindFunction: any): any;
        getGetAccessors(): any;
        getSetAccessor(nameOrFindFunction: any): any;
        getSetAccessorOrThrow(nameOrFindFunction: any): any;
        getSetAccessors(): any;
        getMethod(nameOrFindFunction: any): any;
        getMethodOrThrow(nameOrFindFunction: any): any;
        getMethods(): any;
        getInstanceMethod(nameOrFindFunction: any): any;
        getInstanceMethodOrThrow(nameOrFindFunction: any): any;
        getInstanceMethods(): any;
        getStaticMethod(nameOrFindFunction: any): any;
        getStaticMethodOrThrow(nameOrFindFunction: any): any;
        getStaticMethods(): any;
        getInstanceMember(nameOrFindFunction: any): any;
        getInstanceMemberOrThrow(nameOrFindFunction: any): any;
        getInstanceMembers(): any;
        getStaticMember(nameOrFindFunction: any): any;
        getStaticMemberOrThrow(nameOrFindFunction: any): any;
        getStaticMembers(): any;
        getMembersWithParameterProperties(): any;
        getMembers(): any;
        getMembersWithComments(): any;
        getMember(nameOrFindFunction: any): any;
        getMemberOrThrow(nameOrFindFunction: any): any;
        getBaseTypes(): any;
        getBaseClassOrThrow(message: any): any;
        getBaseClass(): any;
        getDerivedClasses(): any[];
    };
    [x: string]: any;
};
export function ClassLikeDeclarationBase(Base: any): {
    new (): {
        [x: string]: any;
        setExtends(text: any): any;
        removeExtends(): any;
        getExtendsOrThrow(message: any): any;
        getExtends(): any;
        addMembers(members: any): any[];
        addMember(member: any): any;
        insertMember(index: any, member: any): any;
        insertMembers(index: any, members: any): any[];
        addConstructor(structure?: {}): any;
        addConstructors(structures: any): any[];
        insertConstructor(index: any, structure?: {}): any;
        insertConstructors(index: any, structures: any): any[];
        getConstructors(): any;
        addStaticBlock(structure?: {}): any;
        addStaticBlocks(structures: any): any[];
        insertStaticBlock(index: any, structure?: {}): any;
        insertStaticBlocks(index: any, structures: any): any[];
        getStaticBlocks(): any;
        addGetAccessor(structure: any): any;
        addGetAccessors(structures: any): any[];
        insertGetAccessor(index: any, structure: any): any;
        insertGetAccessors(index: any, structures: any): any[];
        addSetAccessor(structure: any): any;
        addSetAccessors(structures: any): any[];
        insertSetAccessor(index: any, structure: any): any;
        insertSetAccessors(index: any, structures: any): any[];
        addProperty(structure: any): any;
        addProperties(structures: any): any[];
        insertProperty(index: any, structure: any): any;
        insertProperties(index: any, structures: any): any[];
        addMethod(structure: any): any;
        addMethods(structures: any): any[];
        insertMethod(index: any, structure: any): any;
        insertMethods(index: any, structures: any): any[];
        getInstanceProperty(nameOrFindFunction: any): any;
        getInstancePropertyOrThrow(nameOrFindFunction: any): any;
        getInstanceProperties(): any;
        getStaticProperty(nameOrFindFunction: any): any;
        getStaticPropertyOrThrow(nameOrFindFunction: any): any;
        getStaticProperties(): any;
        getProperty(nameOrFindFunction: any): any;
        getPropertyOrThrow(nameOrFindFunction: any): any;
        getProperties(): any;
        getGetAccessor(nameOrFindFunction: any): any;
        getGetAccessorOrThrow(nameOrFindFunction: any): any;
        getGetAccessors(): any;
        getSetAccessor(nameOrFindFunction: any): any;
        getSetAccessorOrThrow(nameOrFindFunction: any): any;
        getSetAccessors(): any;
        getMethod(nameOrFindFunction: any): any;
        getMethodOrThrow(nameOrFindFunction: any): any;
        getMethods(): any;
        getInstanceMethod(nameOrFindFunction: any): any;
        getInstanceMethodOrThrow(nameOrFindFunction: any): any;
        getInstanceMethods(): any;
        getStaticMethod(nameOrFindFunction: any): any;
        getStaticMethodOrThrow(nameOrFindFunction: any): any;
        getStaticMethods(): any;
        getInstanceMember(nameOrFindFunction: any): any;
        getInstanceMemberOrThrow(nameOrFindFunction: any): any;
        getInstanceMembers(): any;
        getStaticMember(nameOrFindFunction: any): any;
        getStaticMemberOrThrow(nameOrFindFunction: any): any;
        getStaticMembers(): any;
        getMembersWithParameterProperties(): any;
        getMembers(): any;
        getMembersWithComments(): any;
        getMember(nameOrFindFunction: any): any;
        getMemberOrThrow(nameOrFindFunction: any): any;
        getBaseTypes(): any;
        getBaseClassOrThrow(message: any): any;
        getBaseClass(): any;
        getDerivedClasses(): any[];
    };
    [x: string]: any;
};
export function ClassLikeDeclarationBaseSpecific(Base: any): {
    new (): {
        [x: string]: any;
        setExtends(text: any): any;
        removeExtends(): any;
        getExtendsOrThrow(message: any): any;
        getExtends(): any;
        addMembers(members: any): any[];
        addMember(member: any): any;
        insertMember(index: any, member: any): any;
        insertMembers(index: any, members: any): any[];
        addConstructor(structure?: {}): any;
        addConstructors(structures: any): any[];
        insertConstructor(index: any, structure?: {}): any;
        insertConstructors(index: any, structures: any): any[];
        getConstructors(): any;
        addStaticBlock(structure?: {}): any;
        addStaticBlocks(structures: any): any[];
        insertStaticBlock(index: any, structure?: {}): any;
        insertStaticBlocks(index: any, structures: any): any[];
        getStaticBlocks(): any;
        addGetAccessor(structure: any): any;
        addGetAccessors(structures: any): any[];
        insertGetAccessor(index: any, structure: any): any;
        insertGetAccessors(index: any, structures: any): any[];
        addSetAccessor(structure: any): any;
        addSetAccessors(structures: any): any[];
        insertSetAccessor(index: any, structure: any): any;
        insertSetAccessors(index: any, structures: any): any[];
        addProperty(structure: any): any;
        addProperties(structures: any): any[];
        insertProperty(index: any, structure: any): any;
        insertProperties(index: any, structures: any): any[];
        addMethod(structure: any): any;
        addMethods(structures: any): any[];
        insertMethod(index: any, structure: any): any;
        insertMethods(index: any, structures: any): any[];
        getInstanceProperty(nameOrFindFunction: any): any;
        getInstancePropertyOrThrow(nameOrFindFunction: any): any;
        getInstanceProperties(): any;
        getStaticProperty(nameOrFindFunction: any): any;
        getStaticPropertyOrThrow(nameOrFindFunction: any): any;
        getStaticProperties(): any;
        getProperty(nameOrFindFunction: any): any;
        getPropertyOrThrow(nameOrFindFunction: any): any;
        getProperties(): any;
        getGetAccessor(nameOrFindFunction: any): any;
        getGetAccessorOrThrow(nameOrFindFunction: any): any;
        getGetAccessors(): any;
        getSetAccessor(nameOrFindFunction: any): any;
        getSetAccessorOrThrow(nameOrFindFunction: any): any;
        getSetAccessors(): any;
        getMethod(nameOrFindFunction: any): any;
        getMethodOrThrow(nameOrFindFunction: any): any;
        getMethods(): any;
        getInstanceMethod(nameOrFindFunction: any): any;
        getInstanceMethodOrThrow(nameOrFindFunction: any): any;
        getInstanceMethods(): any;
        getStaticMethod(nameOrFindFunction: any): any;
        getStaticMethodOrThrow(nameOrFindFunction: any): any;
        getStaticMethods(): any;
        getInstanceMember(nameOrFindFunction: any): any;
        getInstanceMemberOrThrow(nameOrFindFunction: any): any;
        getInstanceMembers(): any;
        getStaticMember(nameOrFindFunction: any): any;
        getStaticMemberOrThrow(nameOrFindFunction: any): any;
        getStaticMembers(): any;
        getMembersWithParameterProperties(): any;
        getMembers(): any;
        getMembersWithComments(): any;
        getMember(nameOrFindFunction: any): any;
        getMemberOrThrow(nameOrFindFunction: any): any;
        getBaseTypes(): any;
        getBaseClassOrThrow(message: any): any;
        getBaseClass(): any;
        getDerivedClasses(): any[];
    };
    [x: string]: any;
};
declare const ClassStaticBlockDeclaration_base: {
    new (): {
        [x: string]: any;
        setOrder(order: any): any;
    };
    [x: string]: any;
};
export class ClassStaticBlockDeclaration extends ClassStaticBlockDeclaration_base {
    getName(): string;
    isStatic(): boolean;
    set(structure: any): ClassStaticBlockDeclaration;
    getStructure(): any;
}
export const ClassStaticBlockDeclarationBase: {
    new (): {
        [x: string]: any;
        setOrder(order: any): any;
    };
    [x: string]: any;
};
export class CodeAction {
    constructor(context: any, compilerObject: any);
    _context: any;
    _compilerObject: any;
    get compilerObject(): any;
    getDescription(): any;
    getChanges(): any;
}
export class CodeFixAction extends CodeAction {
    getFixName(): any;
    getFixId(): any;
    getFixAllDescription(): any;
}
export class CombinedCodeActions {
    constructor(context: any, compilerObject: any);
    _context: any;
    _compilerObject: any;
    get compilerObject(): any;
    getChanges(): any;
    applyChanges(options: any): CombinedCodeActions;
}
export class CommaListExpression extends Expression {
    getElements(): any;
}
export const CommaListExpressionBase: typeof Expression;
export class CommentClassElement extends ClassElement {
}
export class CommentEnumMember extends Node {
    remove(): void;
}
export var CommentNodeKind: any;
export class CommentObjectLiteralElement extends ObjectLiteralElement {
}
export class CommentRange extends TextRange {
    getKind(): any;
}
export class CommentStatement extends Statement {
}
export class CommentTypeElement extends TypeElement {
}
export function CommonIdentifierBase(Base: any): {
    new (): {
        [x: string]: any;
        getText(): any;
        getDefinitionNodes(): any;
        getDefinitions(): any;
    };
    [x: string]: any;
};
export class CompilerCommentClassElement extends CompilerCommentNode {
    constructor(...args: any[]);
    _commentKind: any;
}
export class CompilerCommentEnumMember extends CompilerCommentNode {
    constructor(...args: any[]);
    _commentKind: any;
}
export class CompilerCommentNode {
    constructor(fullStart: any, pos: any, end: any, kind: any, sourceFile: any, parent: any);
    _fullStart: any;
    _start: any;
    _sourceFile: any;
    pos: any;
    end: any;
    kind: any;
    flags: ts.NodeFlags;
    parent: any;
    getSourceFile(): any;
    getChildCount(sourceFile: any): number;
    getChildAt(index: any, sourceFile: any): undefined;
    getChildren(sourceFile: any): never[];
    getStart(sourceFile: any, includeJsDocComment: any): any;
    getFullStart(): any;
    getEnd(): any;
    getWidth(sourceFile: any): number;
    getFullWidth(): number;
    getLeadingTriviaWidth(sourceFile: any): number;
    getFullText(sourceFile: any): any;
    getText(sourceFile: any): any;
    getFirstToken(sourceFile: any): undefined;
    getLastToken(sourceFile: any): undefined;
    forEachChild(cbNode: any, cbNodeArray: any): undefined;
}
export class CompilerCommentObjectLiteralElement extends CompilerCommentNode {
    constructor(...args: any[]);
    _commentKind: any;
}
export class CompilerCommentStatement extends CompilerCommentNode {
    constructor(...args: any[]);
    _commentKind: any;
}
export class CompilerCommentTypeElement extends CompilerCommentNode {
    constructor(...args: any[]);
    _commentKind: any;
}
declare const ComputedPropertyName_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class ComputedPropertyName extends ComputedPropertyName_base {
}
export const ComputedPropertyNameBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class ConditionalExpression extends Expression {
    getCondition(): any;
    getQuestionToken(): any;
    getWhenTrue(): any;
    getColonToken(): any;
    getWhenFalse(): any;
}
export const ConditionalExpressionBase: typeof Expression;
export class ConditionalTypeNode extends TypeNode {
    getCheckType(): any;
    getExtendsType(): any;
    getTrueType(): any;
    getFalseType(): any;
}
declare const ConstructSignatureDeclaration_base: {
    new (): {
        [x: string]: any;
        getTypeParameter(nameOrFindFunction: any): any;
        getTypeParameterOrThrow(nameOrFindFunction: any): any;
        getTypeParameters(): any;
        addTypeParameter(structure: any): any;
        addTypeParameters(structures: any): any[];
        insertTypeParameter(index: any, structure: any): any;
        insertTypeParameters(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class ConstructSignatureDeclaration extends ConstructSignatureDeclaration_base {
}
export const ConstructSignatureDeclarationBase: {
    new (): {
        [x: string]: any;
        getTypeParameter(nameOrFindFunction: any): any;
        getTypeParameterOrThrow(nameOrFindFunction: any): any;
        getTypeParameters(): any;
        addTypeParameter(structure: any): any;
        addTypeParameters(structures: any): any[];
        insertTypeParameter(index: any, structure: any): any;
        insertTypeParameters(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const ConstructorDeclaration_base: {
    new (): {
        [x: string]: any;
        findReferences(): any;
        findReferencesAsNodes(): any;
    };
    [x: string]: any;
};
export class ConstructorDeclaration extends ConstructorDeclaration_base {
    set(structure: any): ConstructorDeclaration;
    addOverload(structure: any): any;
    addOverloads(structures: any): any[];
    insertOverload(index: any, structure: any): any;
    insertOverloads(index: any, structures: any): any[];
    getStructure(): any;
}
export const ConstructorDeclarationBase: {
    new (): {
        [x: string]: any;
        findReferences(): any;
        findReferencesAsNodes(): any;
    };
    [x: string]: any;
};
export const ConstructorDeclarationOverloadBase: {
    new (): {
        [x: string]: any;
        getTypeParameter(nameOrFindFunction: any): any;
        getTypeParameterOrThrow(nameOrFindFunction: any): any;
        getTypeParameters(): any;
        addTypeParameter(structure: any): any;
        addTypeParameters(structures: any): any[];
        insertTypeParameter(index: any, structure: any): any;
        insertTypeParameters(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const ConstructorTypeNode_base: {
    new (): {
        [x: string]: any;
        isAbstract(): boolean;
        getAbstractKeyword(): any;
        getAbstractKeywordOrThrow(message: any): any;
        setIsAbstract(isAbstract: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class ConstructorTypeNode extends ConstructorTypeNode_base {
}
export const ConstructorTypeNodeBase: {
    new (): {
        [x: string]: any;
        isAbstract(): boolean;
        getAbstractKeyword(): any;
        getAbstractKeywordOrThrow(message: any): any;
        setIsAbstract(isAbstract: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class ContinueStatement extends Statement {
    getLabel(): any;
    getLabelOrThrow(message: any): any;
}
export class DebuggerStatement extends Statement {
}
export const DebuggerStatementBase: typeof Statement;
export function DecoratableNode(Base: any): {
    new (): {
        [x: string]: any;
        getDecorator(nameOrFindFunction: any): any;
        getDecoratorOrThrow(nameOrFindFunction: any, message: any): any;
        getDecorators(): any[];
        addDecorator(structure: any): any;
        addDecorators(structures: any): any[];
        insertDecorator(index: any, structure: any): any;
        insertDecorators(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const Decorator_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class Decorator extends Decorator_base {
    getName(): any;
    getNameNode(): any;
    getFullName(): any;
    isDecoratorFactory(): boolean;
    setIsDecoratorFactory(isDecoratorFactory: any): Decorator;
    getCallExpressionOrThrow(message: any): any;
    getCallExpression(): any;
    getArguments(): any;
    getTypeArguments(): any;
    addTypeArgument(argumentText: any): any;
    addTypeArguments(argumentTexts: any): any;
    insertTypeArgument(index: any, argumentText: any): any;
    insertTypeArguments(index: any, argumentTexts: any): any;
    removeTypeArgument(typeArgOrIndex: any): Decorator;
    addArgument(argumentText: any): any;
    addArguments(argumentTexts: any): any;
    insertArgument(index: any, argumentText: any): any;
    insertArguments(index: any, argumentTexts: any): any;
    removeArgument(argOrIndex: any): Decorator;
    remove(): void;
    _getInnerExpression(): any;
    set(structure: any): Decorator;
    getStructure(): any;
}
export const DecoratorBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
declare const DefaultClause_base: {
    new (): {
        [x: string]: any;
        insertText(pos: any, textOrWriterFunction: any): any;
        removeText(pos: any, end: any): any;
        replaceText(range: any, textOrWriterFunction: any): any;
    };
    [x: string]: any;
};
export class DefaultClause extends DefaultClause_base {
    remove(): void;
}
export const DefaultClauseBase: {
    new (): {
        [x: string]: any;
        insertText(pos: any, textOrWriterFunction: any): any;
        removeText(pos: any, end: any): any;
        replaceText(range: any, textOrWriterFunction: any): any;
    };
    [x: string]: any;
};
export class DefinitionInfo extends DocumentSpan {
    getKind(): any;
    getName(): any;
    getContainerKind(): any;
    getContainerName(): any;
    getDeclarationNode(): any;
}
declare const DeleteExpression_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class DeleteExpression extends DeleteExpression_base {
}
export const DeleteExpressionBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class Diagnostic {
    constructor(context: any, compilerObject: any);
    _context: any;
    _compilerObject: any;
    get compilerObject(): any;
    getSourceFile(): any;
    getMessageText(): any;
    getLineNumber(): number | undefined;
    getStart(): any;
    getLength(): any;
    getCategory(): any;
    getCode(): any;
    getSource(): any;
}
export class DiagnosticMessageChain {
    constructor(compilerObject: any);
    _compilerObject: any;
    get compilerObject(): any;
    getMessageText(): any;
    getNext(): DiagnosticMessageChain[] | undefined;
    getCode(): any;
    getCategory(): any;
}
export class DiagnosticWithLocation extends Diagnostic {
}
export class Directory {
    static _isAncestorOfDir(ancestor: any, descendant: any): boolean;
    constructor(context: any, path: any);
    __context: any;
    _setPathInternal(path: any): void;
    _path: any;
    _pathParts: any;
    get _context(): any;
    isAncestorOf(possibleDescendant: any): boolean;
    isDescendantOf(possibleAncestor: any): boolean;
    _getDepth(): any;
    getPath(): any;
    getBaseName(): any;
    getParentOrThrow(message: any): any;
    getParent(): any;
    getDirectoryOrThrow(pathOrCondition: any): any;
    getDirectory(pathOrCondition: any): any;
    getSourceFileOrThrow(pathOrCondition: any): any;
    getSourceFile(pathOrCondition: any): any;
    getDirectories(): any[];
    _getDirectoriesIterator(): any;
    getSourceFiles(globPatterns: any): any[];
    _getSourceFilesIterator(): any;
    getDescendantSourceFiles(): any[];
    _getDescendantSourceFilesIterator(): Generator<any, void, any>;
    getDescendantDirectories(): any[];
    _getDescendantDirectoriesIterator(): Generator<any, void, any>;
    addSourceFilesAtPaths(fileGlobs: any): any;
    addDirectoryAtPathIfExists(relativeOrAbsoluteDirPath: any, options?: {}): any;
    addDirectoryAtPath(relativeOrAbsoluteDirPath: any, options?: {}): any;
    createDirectory(relativeOrAbsoluteDirPath: any): any;
    createSourceFile(relativeFilePath: any, sourceFileText: any, options: any): any;
    addSourceFileAtPathIfExists(relativeFilePath: any): any;
    addSourceFileAtPath(relativeFilePath: any): any;
    emit(options?: {}): Promise<DirectoryEmitResult>;
    emitSync(options?: {}): DirectoryEmitResult;
    _emitInternal(options?: {}): any;
    copyToDirectory(dirPathOrDirectory: any, options: any): any;
    copy(relativeOrAbsolutePath: any, options: any): any;
    copyImmediately(relativeOrAbsolutePath: any, options: any): Promise<any>;
    copyImmediatelySync(relativeOrAbsolutePath: any, options: any): any;
    _copyInternal(newPath: any, options: any): any;
    moveToDirectory(dirPathOrDirectory: any, options: any): Directory;
    move(relativeOrAbsolutePath: any, options: any): Directory;
    moveImmediately(relativeOrAbsolutePath: any, options: any): Promise<Directory>;
    moveImmediatelySync(relativeOrAbsolutePath: any, options: any): Directory;
    _moveInternal(newPath: any, options: any, preAction: any): Directory;
    clear(): void;
    clearImmediately(): Promise<void>;
    clearImmediatelySync(): void;
    delete(): void;
    _deleteDescendants(): void;
    deleteImmediately(): Promise<void>;
    deleteImmediatelySync(): void;
    forget(): void;
    _forgetOnlyThis(): void;
    save(): Promise<void>;
    saveSync(): void;
    getRelativePathTo(sourceFileDirOrPath: any): import("./common/ts_morph_common.js").StandardizedFilePath;
    getRelativePathAsModuleSpecifierTo(sourceFileDirOrFilePath: any): string;
    getProject(): any;
    wasForgotten(): boolean;
    _isInProject(): any;
    _markAsInProject(): void;
    _hasLoadedParent(): any;
    _throwIfDeletedOrRemoved(): void;
    _getReferencesForCopy(sourceFile: any): any;
    _getReferencesForMove(sourceFile: any): {
        literalReferences: any;
        referencingLiterals: any;
    };
}
export class DirectoryEmitResult {
    constructor(_skippedFilePaths: any, _outputFilePaths: any);
    _skippedFilePaths: any;
    _outputFilePaths: any;
    getSkippedFilePaths(): any;
    getOutputFilePaths(): any;
}
export const DirectoryNotFoundError: typeof errors.DirectoryNotFoundError;
declare const DoStatement_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class DoStatement extends DoStatement_base {
}
export const DoStatementBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class DocumentSpan {
    constructor(context: any, compilerObject: any);
    _context: any;
    _compilerObject: any;
    _sourceFile: any;
    get compilerObject(): any;
    getSourceFile(): any;
    getTextSpan(): TextSpan;
    getNode(): undefined;
    getOriginalTextSpan(): TextSpan | undefined;
    getOriginalFileName(): any;
}
export function DotDotDotTokenableNode(Base: any): {
    new (): {
        [x: string]: any;
        getDotDotDotTokenOrThrow(message: any): any;
        getDotDotDotToken(): any;
    };
    [x: string]: any;
};
declare const ElementAccessExpression_base: {
    new (): {
        [x: string]: any;
        hasQuestionDotToken(): boolean;
        getQuestionDotTokenNode(): any;
        getQuestionDotTokenNodeOrThrow(message: any): any;
        setHasQuestionDotToken(value: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class ElementAccessExpression extends ElementAccessExpression_base {
    getArgumentExpression(): any;
    getArgumentExpressionOrThrow(message: any): any;
}
export const ElementAccessExpressionBase: {
    new (): {
        [x: string]: any;
        hasQuestionDotToken(): boolean;
        getQuestionDotTokenNode(): any;
        getQuestionDotTokenNodeOrThrow(message: any): any;
        setHasQuestionDotToken(value: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class EmitOutput {
    constructor(context: any, compilerObject: any);
    _context: any;
    _compilerObject: any;
    get compilerObject(): any;
    getEmitSkipped(): any;
    getOutputFiles(): any;
}
export class EmitResult {
    constructor(context: any, compilerObject: any);
    _context: any;
    _compilerObject: any;
    get compilerObject(): any;
    getEmitSkipped(): any;
    getDiagnostics(): any;
}
export class EmptyStatement extends Statement {
}
export const EmptyStatementBase: typeof Statement;
declare const EnumDeclaration_base: {
    new (): {
        [x: string]: any;
        insertText(pos: any, textOrWriterFunction: any): any;
        removeText(pos: any, end: any): any;
        replaceText(range: any, textOrWriterFunction: any): any;
    };
    [x: string]: any;
};
export class EnumDeclaration extends EnumDeclaration_base {
    set(structure: any): EnumDeclaration;
    addMember(structure: any): any;
    addMembers(structures: any): any[];
    insertMember(index: any, structure: any): any;
    insertMembers(index: any, structures: any): any[];
    getMember(nameOrFindFunction: any): any;
    getMemberOrThrow(nameOrFindFunction: any): any;
    getMembers(): any;
    getMembersWithComments(): any;
    setIsConstEnum(value: any): any;
    isConstEnum(): boolean;
    getConstKeyword(): any;
    getStructure(): any;
}
export const EnumDeclarationBase: {
    new (): {
        [x: string]: any;
        insertText(pos: any, textOrWriterFunction: any): any;
        removeText(pos: any, end: any): any;
        replaceText(range: any, textOrWriterFunction: any): any;
    };
    [x: string]: any;
};
declare const EnumMember_base: {
    new (): {
        [x: string]: any;
        getJsDocs(): any;
        addJsDoc(structure: any): any;
        addJsDocs(structures: any): any[];
        insertJsDoc(index: any, structure: any): any;
        insertJsDocs(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class EnumMember extends EnumMember_base {
    getValue(): any;
    setValue(value: any): EnumMember;
    remove(): void;
    set(structure: any): EnumMember;
}
export const EnumMemberBase: {
    new (): {
        [x: string]: any;
        getJsDocs(): any;
        addJsDoc(structure: any): any;
        addJsDocs(structures: any): any[];
        insertJsDoc(index: any, structure: any): any;
        insertJsDocs(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export function ExclamationTokenableNode(Base: any): {
    new (): {
        [x: string]: any;
        hasExclamationToken(): boolean;
        getExclamationTokenNode(): any;
        getExclamationTokenNodeOrThrow(message: any): any;
        setHasExclamationToken(value: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const ExportAssignment_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class ExportAssignment extends ExportAssignment_base {
    isExportEquals(): any;
    setIsExportEquals(value: any): ExportAssignment;
    set(structure: any): ExportAssignment;
    getStructure(): any;
}
export const ExportAssignmentBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class ExportDeclaration extends Statement {
    isTypeOnly(): any;
    setIsTypeOnly(value: any): ExportDeclaration;
    getNamespaceExport(): any;
    getNamespaceExportOrThrow(message: any): any;
    setNamespaceExport(name: any): ExportDeclaration;
    setModuleSpecifier(textOrSourceFile: any): ExportDeclaration;
    getModuleSpecifier(): any;
    getModuleSpecifierValue(): any;
    getModuleSpecifierSourceFileOrThrow(message: any): any;
    getModuleSpecifierSourceFile(): any;
    isModuleSpecifierRelative(): any;
    removeModuleSpecifier(): ExportDeclaration;
    hasModuleSpecifier(): boolean;
    isNamespaceExport(): boolean;
    hasNamedExports(): boolean;
    addNamedExport(namedExport: any): any;
    addNamedExports(namedExports: any): any[];
    insertNamedExport(index: any, namedExport: any): any;
    insertNamedExports(index: any, namedExports: any): any[];
    getNamedExports(): any;
    toNamespaceExport(): ExportDeclaration;
    setAssertElements(elements: any): ExportDeclaration;
    getAssertClause(): any;
    set(structure: any): ExportDeclaration;
    getStructure(): any;
}
export const ExportDeclarationBase: typeof Statement;
export function ExportGetableNode(Base: any): {
    new (): {
        [x: string]: any;
        hasExportKeyword(): boolean;
        getExportKeyword(): any;
        getExportKeywordOrThrow(message: any): any;
        hasDefaultKeyword(): boolean;
        getDefaultKeyword(): any;
        getDefaultKeywordOrThrow(message: any): any;
        isExported(): any;
        isDefaultExport(): boolean;
        isNamedExport(): any;
    };
    [x: string]: any;
};
export class ExportSpecifier extends Node {
    setName(name: any): ExportSpecifier;
    getName(): any;
    getNameNode(): any;
    renameAlias(alias: any): ExportSpecifier;
    setAlias(alias: any): ExportSpecifier;
    removeAlias(): ExportSpecifier;
    removeAliasWithRename(): ExportSpecifier;
    getAliasNode(): any;
    isTypeOnly(): any;
    setIsTypeOnly(value: any): ExportSpecifier;
    getExportDeclaration(): any;
    getLocalTargetSymbolOrThrow(message: any): any;
    getLocalTargetSymbol(): any;
    getLocalTargetDeclarations(): any;
    remove(): void;
    set(structure: any): ExportSpecifier;
    getStructure(): any;
}
export const ExportSpecifierBase: typeof Node;
export function ExportableNode(Base: any): {
    new (): {
        [x: string]: any;
        setIsDefaultExport(value: any): any;
        setIsExported(value: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class Expression extends Node {
    getContextualType(): any;
}
declare const ExpressionStatement_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class ExpressionStatement extends ExpressionStatement_base {
}
export const ExpressionStatementBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
declare const ExpressionWithTypeArguments_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class ExpressionWithTypeArguments extends ExpressionWithTypeArguments_base {
}
export const ExpressionWithTypeArgumentsBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export function ExpressionableNode(Base: any): {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionOrThrow(message: any): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
    };
    [x: string]: any;
};
export function ExpressionedNode(Base: any): {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export function ExtendsClauseableNode(Base: any): {
    new (): {
        [x: string]: any;
        getExtends(): any;
        addExtends(text: any): any;
        insertExtends(index: any, texts: any): any;
        removeExtends(implementsNodeOrIndex: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const ExternalModuleReference_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionOrThrow(message: any): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
    };
    [x: string]: any;
};
export class ExternalModuleReference extends ExternalModuleReference_base {
    getReferencedSourceFileOrThrow(message: any): any;
    isRelative(): any;
    getReferencedSourceFile(): any;
}
export const ExternalModuleReferenceBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionOrThrow(message: any): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
    };
    [x: string]: any;
};
export class FalseLiteral extends PrimaryExpression {
    getLiteralValue(): boolean;
    setLiteralValue(value: any): any;
}
export const FalseLiteralBase: typeof PrimaryExpression;
export const FileNotFoundError: typeof errors.FileNotFoundError;
export class FileReference extends TextRange {
    getFileName(): any;
}
export var FileSystemRefreshResult: any;
export class FileTextChanges {
    constructor(context: any, compilerObject: any);
    _context: any;
    _compilerObject: any;
    _existingFileExists: boolean;
    _sourceFile: any;
    getFilePath(): any;
    getSourceFile(): any;
    getTextChanges(): any;
    applyChanges(options?: {}): FileTextChanges | undefined;
    _isApplied: boolean | undefined;
    isNewFile(): boolean;
}
declare const ForInStatement_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class ForInStatement extends ForInStatement_base {
    getInitializer(): any;
}
export const ForInStatementBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
declare const ForOfStatement_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class ForOfStatement extends ForOfStatement_base {
    getInitializer(): any;
}
export const ForOfStatementBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class ForStatement extends IterationStatement {
    getInitializer(): any;
    getInitializerOrThrow(message: any): any;
    getCondition(): any;
    getConditionOrThrow(message: any): any;
    getIncrementor(): any;
    getIncrementorOrThrow(message: any): any;
}
export const ForStatementBase: typeof IterationStatement;
declare const FunctionDeclaration_base: {
    new (): {
        [x: string]: any;
        unwrap(): void;
    };
    [x: string]: any;
};
export class FunctionDeclaration extends FunctionDeclaration_base {
    addOverload(structure: any): any;
    addOverloads(structures: any): any[];
    insertOverload(index: any, structure: any): any;
    insertOverloads(index: any, structures: any): any[];
    remove(): void;
    set(structure: any): FunctionDeclaration;
    getStructure(): any;
}
export const FunctionDeclarationBase: {
    new (): {
        [x: string]: any;
        unwrap(): void;
    };
    [x: string]: any;
};
export const FunctionDeclarationOverloadBase: {
    new (): {
        [x: string]: any;
        unwrap(): void;
    };
    [x: string]: any;
};
declare const FunctionExpression_base: {
    new (): {
        [x: string]: any;
        getJsDocs(): any;
        addJsDoc(structure: any): any;
        addJsDocs(structures: any): any[];
        insertJsDoc(index: any, structure: any): any;
        insertJsDocs(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class FunctionExpression extends FunctionExpression_base {
}
export const FunctionExpressionBase: {
    new (): {
        [x: string]: any;
        getJsDocs(): any;
        addJsDoc(structure: any): any;
        addJsDocs(structures: any): any[];
        insertJsDoc(index: any, structure: any): any;
        insertJsDocs(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export function FunctionLikeDeclaration(Base: any): {
    new (): {
        [x: string]: any;
        getJsDocs(): any;
        addJsDoc(structure: any): any;
        addJsDocs(structures: any): any[];
        insertJsDoc(index: any, structure: any): any;
        insertJsDocs(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const FunctionOrConstructorTypeNodeBase_base: {
    new (): {
        [x: string]: any;
        getReturnType(): any;
        getReturnTypeNode(): any;
        getReturnTypeNodeOrThrow(message: any): any;
        setReturnType(textOrWriterFunction: any): any;
        removeReturnType(): any;
        getSignature(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class FunctionOrConstructorTypeNodeBase extends FunctionOrConstructorTypeNodeBase_base {
}
export const FunctionOrConstructorTypeNodeBaseBase: {
    new (): {
        [x: string]: any;
        getReturnType(): any;
        getReturnTypeNode(): any;
        getReturnTypeNodeOrThrow(message: any): any;
        setReturnType(textOrWriterFunction: any): any;
        removeReturnType(): any;
        getSignature(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const FunctionTypeNode_base: {
    new (): {
        [x: string]: any;
        getTypeParameter(nameOrFindFunction: any): any;
        getTypeParameterOrThrow(nameOrFindFunction: any): any;
        getTypeParameters(): any;
        addTypeParameter(structure: any): any;
        addTypeParameters(structures: any): any[];
        insertTypeParameter(index: any, structure: any): any;
        insertTypeParameters(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class FunctionTypeNode extends FunctionTypeNode_base {
}
export const FunctionTypeNodeBase: {
    new (): {
        [x: string]: any;
        getTypeParameter(nameOrFindFunction: any): any;
        getTypeParameterOrThrow(nameOrFindFunction: any): any;
        getTypeParameters(): any;
        addTypeParameter(structure: any): any;
        addTypeParameters(structures: any): any[];
        insertTypeParameter(index: any, structure: any): any;
        insertTypeParameters(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export function GeneratorableNode(Base: any): {
    new (): {
        [x: string]: any;
        isGenerator(): boolean;
        getAsteriskToken(): any;
        getAsteriskTokenOrThrow(message: any): any;
        setIsGenerator(value: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const GetAccessorDeclaration_base: {
    new (): {
        [x: string]: any;
        setOrder(order: any): any;
    };
    [x: string]: any;
};
export class GetAccessorDeclaration extends GetAccessorDeclaration_base {
    set(structure: any): GetAccessorDeclaration;
    getSetAccessor(): any;
    getSetAccessorOrThrow(message: any): any;
    getStructure(): any;
}
export const GetAccessorDeclarationBase: {
    new (): {
        [x: string]: any;
        setOrder(order: any): any;
    };
    [x: string]: any;
};
export class HeritageClause extends Node {
    getTypeNodes(): any;
    getToken(): any;
    removeExpression(expressionNodeOrIndex: any): HeritageClause;
}
export function HeritageClauseableNode(Base: any): {
    new (): {
        [x: string]: any;
        getHeritageClauses(): any;
        getHeritageClauseByKindOrThrow(kind: any, message: any): any;
        getHeritageClauseByKind(kind: any): any;
    };
    [x: string]: any;
};
declare const Identifier_base: {
    new (): {
        [x: string]: any;
        getText(): any;
        getDefinitionNodes(): any;
        getDefinitions(): any;
    };
    [x: string]: any;
};
export class Identifier extends Identifier_base {
    getImplementations(): any;
}
export const IdentifierBase: {
    new (): {
        [x: string]: any;
        getText(): any;
        getDefinitionNodes(): any;
        getDefinitions(): any;
    };
    [x: string]: any;
};
declare const IfStatement_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class IfStatement extends IfStatement_base {
    getThenStatement(): any;
    getElseStatement(): any;
    remove(): void;
}
export const IfStatementBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class ImplementationLocation extends DocumentSpan {
    getKind(): any;
    getDisplayParts(): any;
}
export function ImplementsClauseableNode(Base: any): {
    new (): {
        [x: string]: any;
        getImplements(): any;
        addImplements(text: any): any;
        insertImplements(index: any, texts: any): any;
        removeImplements(implementsNodeOrIndex: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class ImportClause extends Node {
    isTypeOnly(): any;
    setIsTypeOnly(value: any): ImportClause;
    getDefaultImportOrThrow(message: any): any;
    getDefaultImport(): any;
    getNamedBindingsOrThrow(message: any): any;
    getNamedBindings(): any;
    getNamespaceImportOrThrow(message: any): any;
    getNamespaceImport(): any;
    getNamedImports(): any;
}
export const ImportClauseBase: typeof Node;
export class ImportDeclaration extends Statement {
    isTypeOnly(): any;
    setIsTypeOnly(value: any): ImportDeclaration;
    setModuleSpecifier(textOrSourceFile: any): ImportDeclaration;
    getModuleSpecifier(): any;
    getModuleSpecifierValue(): any;
    getModuleSpecifierSourceFileOrThrow(message: any): any;
    getModuleSpecifierSourceFile(): any;
    isModuleSpecifierRelative(): any;
    setDefaultImport(text: any): ImportDeclaration;
    renameDefaultImport(text: any): ImportDeclaration;
    getDefaultImportOrThrow(message: any): any;
    getDefaultImport(): any;
    setNamespaceImport(text: any): ImportDeclaration;
    removeNamespaceImport(): ImportDeclaration;
    removeDefaultImport(): ImportDeclaration;
    getNamespaceImportOrThrow(message: any): any;
    getNamespaceImport(): any;
    addNamedImport(namedImport: any): any;
    addNamedImports(namedImports: any): any[];
    insertNamedImport(index: any, namedImport: any): any;
    insertNamedImports(index: any, namedImports: any): any[];
    getNamedImports(): any;
    removeNamedImports(): ImportDeclaration;
    getImportClauseOrThrow(message: any): any;
    getImportClause(): any;
    setAssertElements(elements: any): ImportDeclaration;
    getAssertClause(): any;
    set(structure: any): ImportDeclaration;
    getStructure(): any;
}
export const ImportDeclarationBase: typeof Statement;
declare const ImportEqualsDeclaration_base: {
    new (): {
        [x: string]: any;
        setIsDefaultExport(value: any): any;
        setIsExported(value: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class ImportEqualsDeclaration extends ImportEqualsDeclaration_base {
    isTypeOnly(): any;
    setIsTypeOnly(value: any): ImportEqualsDeclaration;
    getModuleReference(): any;
    isExternalModuleReferenceRelative(): any;
    setExternalModuleReference(textOrSourceFile: any): ImportEqualsDeclaration;
    getExternalModuleReferenceSourceFileOrThrow(message: any): any;
    getExternalModuleReferenceSourceFile(): any;
}
export const ImportEqualsDeclarationBase: {
    new (): {
        [x: string]: any;
        setIsDefaultExport(value: any): any;
        setIsExported(value: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class ImportExpression extends PrimaryExpression {
}
export const ImportExpressionBase: typeof PrimaryExpression;
export function ImportExpressionedNode(Base: any): {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class ImportSpecifier extends Node {
    setName(name: any): ImportSpecifier;
    getName(): any;
    getNameNode(): any;
    renameAlias(alias: any): ImportSpecifier;
    setAlias(alias: any): ImportSpecifier;
    removeAlias(): ImportSpecifier;
    removeAliasWithRename(): ImportSpecifier;
    getAliasNode(): any;
    isTypeOnly(): any;
    setIsTypeOnly(value: any): ImportSpecifier;
    getImportDeclaration(): any;
    remove(): void;
    set(structure: any): ImportSpecifier;
    getStructure(): any;
}
export const ImportSpecifierBase: typeof Node;
export class ImportTypeAssertionContainer extends Node {
    getAssertClause(): any;
    isMultiline(): any;
}
export class ImportTypeNode extends NodeWithTypeArguments {
    setArgument(text: any): ImportTypeNode;
    getArgument(): any;
    setQualifier(text: any): ImportTypeNode;
    getQualifierOrThrow(message: any): any;
    getQualifier(): any;
    getAssertions(): any;
    getAssertionsOrThrow(message: any): any;
}
export var IndentationText: any;
declare const IndexSignatureDeclaration_base: {
    new (): {
        [x: string]: any;
        getReturnType(): any;
        getReturnTypeNode(): any;
        getReturnTypeNodeOrThrow(message: any): any;
        setReturnType(textOrWriterFunction: any): any;
        removeReturnType(): any;
        getSignature(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class IndexSignatureDeclaration extends IndexSignatureDeclaration_base {
    getKeyName(): any;
    setKeyName(name: any): void;
    getKeyNameNode(): any;
    getKeyType(): any;
    setKeyType(type: any): IndexSignatureDeclaration;
    getKeyTypeNode(): any;
    set(structure: any): IndexSignatureDeclaration;
}
export const IndexSignatureDeclarationBase: {
    new (): {
        [x: string]: any;
        getReturnType(): any;
        getReturnTypeNode(): any;
        getReturnTypeNodeOrThrow(message: any): any;
        setReturnType(textOrWriterFunction: any): any;
        removeReturnType(): any;
        getSignature(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class IndexedAccessTypeNode extends TypeNode {
    getObjectTypeNode(): any;
    getIndexTypeNode(): any;
}
export class InferTypeNode extends TypeNode {
    getTypeParameter(): any;
}
export function InitializerExpressionGetableNode(Base: any): {
    new (): {
        [x: string]: any;
        hasInitializer(): boolean;
        getInitializerIfKindOrThrow(kind: any, message: any): any;
        getInitializerIfKind(kind: any): any;
        getInitializerOrThrow(message: any): any;
        getInitializer(): any;
    };
    [x: string]: any;
};
export function InitializerExpressionableNode(Base: any): {
    new (): {
        [x: string]: any;
        removeInitializer(): any;
        setInitializer(textOrWriterFunction: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const InterfaceDeclaration_base: {
    new (): {
        [x: string]: any;
        addMember(member: any): any;
        addMembers(members: any): any[];
        insertMember(index: any, member: any): any;
        insertMembers(index: any, members: any): any[];
        addConstructSignature(structure: any): any;
        addConstructSignatures(structures: any): any[];
        insertConstructSignature(index: any, structure: any): any;
        insertConstructSignatures(index: any, structures: any): any[];
        getConstructSignature(findFunction: any): any;
        getConstructSignatureOrThrow(findFunction: any, message: any): any;
        getConstructSignatures(): any;
        addCallSignature(structure: any): any;
        addCallSignatures(structures: any): any[];
        insertCallSignature(index: any, structure: any): any;
        insertCallSignatures(index: any, structures: any): any[];
        getCallSignature(findFunction: any): any;
        getCallSignatureOrThrow(findFunction: any, message: any): any;
        getCallSignatures(): any;
        addIndexSignature(structure: any): any;
        addIndexSignatures(structures: any): any[];
        insertIndexSignature(index: any, structure: any): any;
        insertIndexSignatures(index: any, structures: any): any[];
        getIndexSignature(findFunction: any): any;
        getIndexSignatureOrThrow(findFunction: any, message: any): any;
        getIndexSignatures(): any;
        addMethod(structure: any): any;
        addMethods(structures: any): any[];
        insertMethod(index: any, structure: any): any;
        insertMethods(index: any, structures: any): any[];
        getMethod(nameOrFindFunction: any): any;
        getMethodOrThrow(nameOrFindFunction: any): any;
        getMethods(): any;
        addProperty(structure: any): any;
        addProperties(structures: any): any[];
        insertProperty(index: any, structure: any): any;
        insertProperties(index: any, structures: any): any[];
        getProperty(nameOrFindFunction: any): any;
        getPropertyOrThrow(nameOrFindFunction: any): any;
        getProperties(): any;
        getMembers(): any;
        getMembersWithComments(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class InterfaceDeclaration extends InterfaceDeclaration_base {
    getBaseTypes(): any;
    getBaseDeclarations(): any[];
    getImplementations(): any;
    set(structure: any): InterfaceDeclaration;
}
export const InterfaceDeclarationBase: {
    new (): {
        [x: string]: any;
        addMember(member: any): any;
        addMembers(members: any): any[];
        insertMember(index: any, member: any): any;
        insertMembers(index: any, members: any): any[];
        addConstructSignature(structure: any): any;
        addConstructSignatures(structures: any): any[];
        insertConstructSignature(index: any, structure: any): any;
        insertConstructSignatures(index: any, structures: any): any[];
        getConstructSignature(findFunction: any): any;
        getConstructSignatureOrThrow(findFunction: any, message: any): any;
        getConstructSignatures(): any;
        addCallSignature(structure: any): any;
        addCallSignatures(structures: any): any[];
        insertCallSignature(index: any, structure: any): any;
        insertCallSignatures(index: any, structures: any): any[];
        getCallSignature(findFunction: any): any;
        getCallSignatureOrThrow(findFunction: any, message: any): any;
        getCallSignatures(): any;
        addIndexSignature(structure: any): any;
        addIndexSignatures(structures: any): any[];
        insertIndexSignature(index: any, structure: any): any;
        insertIndexSignatures(index: any, structures: any): any[];
        getIndexSignature(findFunction: any): any;
        getIndexSignatureOrThrow(findFunction: any, message: any): any;
        getIndexSignatures(): any;
        addMethod(structure: any): any;
        addMethods(structures: any): any[];
        insertMethod(index: any, structure: any): any;
        insertMethods(index: any, structures: any): any[];
        getMethod(nameOrFindFunction: any): any;
        getMethodOrThrow(nameOrFindFunction: any): any;
        getMethods(): any;
        addProperty(structure: any): any;
        addProperties(structures: any): any[];
        insertProperty(index: any, structure: any): any;
        insertProperties(index: any, structures: any): any[];
        getProperty(nameOrFindFunction: any): any;
        getPropertyOrThrow(nameOrFindFunction: any): any;
        getProperties(): any;
        getMembers(): any;
        getMembersWithComments(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class IntersectionTypeNode extends TypeNode {
    getTypeNodes(): any;
}
export const InvalidOperationError: typeof errors.InvalidOperationError;
export class IterationStatement extends Statement {
    getStatement(): any;
}
export class JSDoc extends Node {
    isMultiLine(): any;
    getTags(): any;
    getInnerText(): any;
    getComment(): any;
    getCommentText(): any;
    getDescription(): any;
    setDescription(textOrWriterFunction: any): JSDoc;
    addTag(structure: any): any;
    addTags(structures: any): any[];
    insertTag(index: any, structure: any): any;
    insertTags(index: any, structures: any): any[];
    remove(): void;
    set(structure: any): any;
    getStructure(): any;
}
export class JSDocAllType extends JSDocType {
}
export class JSDocAugmentsTag extends JSDocTag {
}
export class JSDocAuthorTag extends JSDocTag {
}
export const JSDocBase: typeof Node;
export class JSDocCallbackTag extends JSDocTag {
}
export class JSDocClassTag extends JSDocTag {
}
export class JSDocDeprecatedTag extends JSDocTag {
}
export class JSDocEnumTag extends JSDocTag {
}
declare const JSDocFunctionType_base: {
    new (): {
        [x: string]: any;
        getReturnType(): any;
        getReturnTypeNode(): any;
        getReturnTypeNodeOrThrow(message: any): any;
        setReturnType(textOrWriterFunction: any): any;
        removeReturnType(): any;
        getSignature(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class JSDocFunctionType extends JSDocFunctionType_base {
}
export const JSDocFunctionTypeBase: {
    new (): {
        [x: string]: any;
        getReturnType(): any;
        getReturnTypeNode(): any;
        getReturnTypeNodeOrThrow(message: any): any;
        setReturnType(textOrWriterFunction: any): any;
        removeReturnType(): any;
        getSignature(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class JSDocImplementsTag extends JSDocTag {
}
export class JSDocLink extends Node {
}
export class JSDocLinkCode extends Node {
}
export class JSDocLinkPlain extends Node {
}
export class JSDocMemberName extends Node {
}
export class JSDocNameReference extends Node {
    getName(): any;
}
export class JSDocNamepathType extends JSDocType {
    getTypeNode(): any;
}
export class JSDocNonNullableType extends JSDocType {
    getTypeNode(): any;
    isPostfix(): any;
}
export class JSDocNullableType extends JSDocType {
    getTypeNode(): any;
    isPostfix(): any;
}
export class JSDocOptionalType extends JSDocType {
    getTypeNode(): any;
}
export class JSDocOverrideTag extends JSDocTag {
}
declare const JSDocParameterTag_base: {
    new (): {
        [x: string]: any;
        getTypeExpression(): any;
        getTypeExpressionOrThrow(message: any): any;
        getName(): any;
        getNameNode(): any;
        isBracketed(): any;
    };
    [x: string]: any;
};
export class JSDocParameterTag extends JSDocParameterTag_base {
}
export const JSDocParameterTagBase: {
    new (): {
        [x: string]: any;
        getTypeExpression(): any;
        getTypeExpressionOrThrow(message: any): any;
        getName(): any;
        getNameNode(): any;
        isBracketed(): any;
    };
    [x: string]: any;
};
export class JSDocPrivateTag extends JSDocTag {
}
export function JSDocPropertyLikeTag(Base: any): {
    new (): {
        [x: string]: any;
        getTypeExpression(): any;
        getTypeExpressionOrThrow(message: any): any;
        getName(): any;
        getNameNode(): any;
        isBracketed(): any;
    };
    [x: string]: any;
};
declare const JSDocPropertyTag_base: {
    new (): {
        [x: string]: any;
        getTypeExpression(): any;
        getTypeExpressionOrThrow(message: any): any;
        getName(): any;
        getNameNode(): any;
        isBracketed(): any;
    };
    [x: string]: any;
};
export class JSDocPropertyTag extends JSDocPropertyTag_base {
}
export const JSDocPropertyTagBase: {
    new (): {
        [x: string]: any;
        getTypeExpression(): any;
        getTypeExpressionOrThrow(message: any): any;
        getName(): any;
        getNameNode(): any;
        isBracketed(): any;
    };
    [x: string]: any;
};
export class JSDocProtectedTag extends JSDocTag {
}
export class JSDocPublicTag extends JSDocTag {
}
export class JSDocReadonlyTag extends JSDocTag {
}
declare const JSDocReturnTag_base: {
    new (): {
        [x: string]: any;
        getTypeExpression(): any;
        getTypeExpressionOrThrow(message: any): any;
    };
    [x: string]: any;
};
export class JSDocReturnTag extends JSDocReturnTag_base {
}
export const JSDocReturnTagBase: {
    new (): {
        [x: string]: any;
        getTypeExpression(): any;
        getTypeExpressionOrThrow(message: any): any;
    };
    [x: string]: any;
};
declare const JSDocSeeTag_base: {
    new (): {
        [x: string]: any;
        getTypeExpression(): any;
        getTypeExpressionOrThrow(message: any): any;
    };
    [x: string]: any;
};
export class JSDocSeeTag extends JSDocSeeTag_base {
}
export const JSDocSeeTagBase: {
    new (): {
        [x: string]: any;
        getTypeExpression(): any;
        getTypeExpressionOrThrow(message: any): any;
    };
    [x: string]: any;
};
export class JSDocSignature extends JSDocType {
    getTypeNode(): any;
}
export class JSDocTag extends Node {
    getTagName(): any;
    getTagNameNode(): any;
    setTagName(tagName: any): any;
    getComment(): any;
    getCommentText(): any;
    remove(): void;
    set(structure: any): any;
    replaceWithText(textOrWriterFunction: any): any;
    getStructure(): any;
}
export const JSDocTagBase: typeof Node;
export class JSDocTagInfo {
    constructor(compilerObject: any);
    _compilerObject: any;
    get compilerObject(): any;
    getName(): any;
    getText(): any;
}
declare const JSDocTemplateTag_base: {
    new (): {
        [x: string]: any;
        getTypeParameters(): any;
    };
    [x: string]: any;
};
export class JSDocTemplateTag extends JSDocTemplateTag_base {
    getConstraint(): any;
    getConstraintOrThrow(message: any): any;
}
export const JSDocTemplateTagBase: {
    new (): {
        [x: string]: any;
        getTypeParameters(): any;
    };
    [x: string]: any;
};
export class JSDocText extends Node {
}
declare const JSDocThisTag_base: {
    new (): {
        [x: string]: any;
        getTypeExpression(): any;
        getTypeExpressionOrThrow(message: any): any;
    };
    [x: string]: any;
};
export class JSDocThisTag extends JSDocThisTag_base {
}
export const JSDocThisTagBase: {
    new (): {
        [x: string]: any;
        getTypeExpression(): any;
        getTypeExpressionOrThrow(message: any): any;
    };
    [x: string]: any;
};
export class JSDocType extends TypeNode {
}
export class JSDocTypeExpression extends TypeNode {
    getTypeNode(): any;
}
export function JSDocTypeExpressionableTag(Base: any): {
    new (): {
        [x: string]: any;
        getTypeExpression(): any;
        getTypeExpressionOrThrow(message: any): any;
    };
    [x: string]: any;
};
export class JSDocTypeLiteral extends JSDocType {
    isArrayType(): any;
    getPropertyTags(): any;
}
export function JSDocTypeParameteredTag(Base: any): {
    new (): {
        [x: string]: any;
        getTypeParameters(): any;
    };
    [x: string]: any;
};
export class JSDocTypeTag extends JSDocTag {
    getTypeExpression(): any;
}
export class JSDocTypedefTag extends JSDocTag {
}
export class JSDocUnknownTag extends JSDocTag {
}
export class JSDocUnknownType extends JSDocType {
}
export class JSDocVariadicType extends JSDocType {
    getTypeNode(): any;
}
export function JSDocableNode(Base: any): {
    new (): {
        [x: string]: any;
        getJsDocs(): any;
        addJsDoc(structure: any): any;
        addJsDocs(structures: any): any[];
        insertJsDoc(index: any, structure: any): any;
        insertJsDocs(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const JsxAttribute_base: {
    new (): {
        [x: string]: any;
        getNameNode(): any;
        getName(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class JsxAttribute extends JsxAttribute_base {
    getInitializerOrThrow(message: any): any;
    getInitializer(): any;
    setInitializer(textOrWriterFunction: any): JsxAttribute;
    removeInitializer(): JsxAttribute;
    remove(): void;
    set(structure: any): JsxAttribute;
}
export const JsxAttributeBase: {
    new (): {
        [x: string]: any;
        getNameNode(): any;
        getName(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export function JsxAttributedNode(Base: any): {
    new (): {
        [x: string]: any;
        getAttributes(): any;
        getAttributeOrThrow(nameOrFindFunction: any): any;
        getAttribute(nameOrFindFunction: any): any;
        addAttribute(structure: any): any;
        addAttributes(structures: any): any[];
        insertAttribute(index: any, structure: any): any;
        insertAttributes(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const JsxClosingElement_base: {
    new (): {
        [x: string]: any;
        getTagNameNode(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class JsxClosingElement extends JsxClosingElement_base {
}
export const JsxClosingElementBase: {
    new (): {
        [x: string]: any;
        getTagNameNode(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class JsxClosingFragment extends Expression {
}
export class JsxElement extends PrimaryExpression {
    getJsxChildren(): any;
    getOpeningElement(): any;
    getClosingElement(): any;
    setBodyText(textOrWriterFunction: any): JsxElement;
    setBodyTextInline(textOrWriterFunction: any): JsxElement;
    set(structure: any): JsxElement;
    getStructure(): any;
}
export const JsxElementBase: typeof PrimaryExpression;
declare const JsxExpression_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionOrThrow(message: any): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
    };
    [x: string]: any;
};
export class JsxExpression extends JsxExpression_base {
}
export const JsxExpressionBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionOrThrow(message: any): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
    };
    [x: string]: any;
};
export class JsxFragment extends PrimaryExpression {
    getJsxChildren(): any;
    getOpeningFragment(): any;
    getClosingFragment(): any;
}
declare const JsxOpeningElement_base: {
    new (): {
        [x: string]: any;
        getAttributes(): any;
        getAttributeOrThrow(nameOrFindFunction: any): any;
        getAttribute(nameOrFindFunction: any): any;
        addAttribute(structure: any): any;
        addAttributes(structures: any): any[];
        insertAttribute(index: any, structure: any): any;
        insertAttributes(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class JsxOpeningElement extends JsxOpeningElement_base {
}
export const JsxOpeningElementBase: {
    new (): {
        [x: string]: any;
        getAttributes(): any;
        getAttributeOrThrow(nameOrFindFunction: any): any;
        getAttribute(nameOrFindFunction: any): any;
        addAttribute(structure: any): any;
        addAttributes(structures: any): any[];
        insertAttribute(index: any, structure: any): any;
        insertAttributes(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class JsxOpeningFragment extends Expression {
}
declare const JsxSelfClosingElement_base: {
    new (): {
        [x: string]: any;
        getAttributes(): any;
        getAttributeOrThrow(nameOrFindFunction: any): any;
        getAttribute(nameOrFindFunction: any): any;
        addAttribute(structure: any): any;
        addAttributes(structures: any): any[];
        insertAttribute(index: any, structure: any): any;
        insertAttributes(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class JsxSelfClosingElement extends JsxSelfClosingElement_base {
}
export const JsxSelfClosingElementBase: {
    new (): {
        [x: string]: any;
        getAttributes(): any;
        getAttributeOrThrow(nameOrFindFunction: any): any;
        getAttribute(nameOrFindFunction: any): any;
        addAttribute(structure: any): any;
        addAttributes(structures: any): any[];
        insertAttribute(index: any, structure: any): any;
        insertAttributes(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const JsxSpreadAttribute_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class JsxSpreadAttribute extends JsxSpreadAttribute_base {
    remove(): void;
    set(structure: any): JsxSpreadAttribute;
    getStructure(): any;
}
export const JsxSpreadAttributeBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export function JsxTagNamedNode(Base: any): {
    new (): {
        [x: string]: any;
        getTagNameNode(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const JsxText_base: {
    new (): {
        [x: string]: any;
        getLiteralText(): any;
        isTerminated(): boolean;
        hasExtendedUnicodeEscape(): any;
    };
    [x: string]: any;
};
export class JsxText extends JsxText_base {
    containsOnlyTriviaWhiteSpaces(): any;
}
export const JsxTextBase: {
    new (): {
        [x: string]: any;
        getLiteralText(): any;
        isTerminated(): boolean;
        hasExtendedUnicodeEscape(): any;
    };
    [x: string]: any;
};
declare const LabeledStatement_base: {
    new (): {
        [x: string]: any;
        getJsDocs(): any;
        addJsDoc(structure: any): any;
        addJsDocs(structures: any): any[];
        insertJsDoc(index: any, structure: any): any;
        insertJsDocs(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class LabeledStatement extends LabeledStatement_base {
    getLabel(): any;
    getStatement(): any;
}
export const LabeledStatementBase: {
    new (): {
        [x: string]: any;
        getJsDocs(): any;
        addJsDoc(structure: any): any;
        addJsDocs(structures: any): any[];
        insertJsDoc(index: any, structure: any): any;
        insertJsDocs(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class LanguageService {
    constructor(params: any);
    get compilerObject(): ts.LanguageService;
    _projectVersion: number;
    _context: any;
    _compilerHost: ts.CompilerHost;
    _compilerObject: ts.LanguageService;
    _program: Program;
    _reset(): void;
    getProgram(): Program;
    getDefinitions(node: any): any[];
    getDefinitionsAtPosition(sourceFile: any, pos: any): any[];
    getImplementations(node: any): ImplementationLocation[];
    getImplementationsAtPosition(sourceFile: any, pos: any): ImplementationLocation[];
    findReferences(node: any): any[];
    findReferencesAsNodes(node: any): any[];
    findReferencesAtPosition(sourceFile: any, pos: any): any[];
    findRenameLocations(node: any, options?: {}): RenameLocation[];
    getSuggestionDiagnostics(filePathOrSourceFile: any): any[];
    getFormattingEditsForRange(filePath: any, range: any, formatSettings: any): TextChange[];
    getFormattingEditsForDocument(filePath: any, formatSettings: any): TextChange[];
    getFormattedDocumentText(filePath: any, formatSettings: any): string;
    getEmitOutput(filePathOrSourceFile: any, emitOnlyDtsFiles: any): EmitOutput;
    getIdentationAtPosition(filePathOrSourceFile: any, position: any, settings: any): number;
    organizeImports(filePathOrSourceFile: any, formatSettings?: {}, userPreferences?: {}): FileTextChanges[];
    getEditsForRefactor(filePathOrSourceFile: any, formatSettings: any, positionOrRange: any, refactorName: any, actionName: any, preferences?: {}): RefactorEditInfo | undefined;
    getCombinedCodeFix(filePathOrSourceFile: any, fixId: any, formatSettings?: {}, preferences?: {}): CombinedCodeActions;
    getCodeFixesAtPosition(filePathOrSourceFile: any, start: any, end: any, errorCodes: any, formatOptions?: {}, preferences?: {}): CodeFixAction[];
    _getFilePathFromFilePathOrSourceFile(filePathOrSourceFile: any): any;
    _getFilledSettings(settings: any): any;
    _getFilledUserPreferences(userPreferences: any): any;
}
export class LeftHandSideExpression extends UpdateExpression {
}
export function LeftHandSideExpressionedNode(Base: any): {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
declare const LiteralExpression_base: {
    new (): {
        [x: string]: any;
        getLiteralText(): any;
        isTerminated(): boolean;
        hasExtendedUnicodeEscape(): any;
    };
    [x: string]: any;
};
export class LiteralExpression extends LiteralExpression_base {
}
export const LiteralExpressionBase: {
    new (): {
        [x: string]: any;
        getLiteralText(): any;
        isTerminated(): boolean;
        hasExtendedUnicodeEscape(): any;
    };
    [x: string]: any;
};
export function LiteralLikeNode(Base: any): {
    new (): {
        [x: string]: any;
        getLiteralText(): any;
        isTerminated(): boolean;
        hasExtendedUnicodeEscape(): any;
    };
    [x: string]: any;
};
export class LiteralTypeNode extends TypeNode {
    getLiteral(): any;
}
export class ManipulationError extends errors.InvalidOperationError {
    constructor(filePath: any, oldText: any, newText: any, errorMessage: any);
    filePath: any;
    oldText: any;
    newText: any;
}
export class ManipulationSettingsContainer extends SettingsContainer<any> {
    constructor();
    getEditorSettings(): {};
    _editorSettings: {} | undefined;
    getFormatCodeSettings(): {
        insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: any;
    };
    _formatCodeSettings: {
        insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: any;
    } | undefined;
    getUserPreferences(): {
        quotePreference: string;
        providePrefixAndSuffixTextForRename: any;
    };
    _userPreferences: {
        quotePreference: string;
        providePrefixAndSuffixTextForRename: any;
    } | undefined;
    getQuoteKind(): any;
    getNewLineKind(): any;
    getNewLineKindAsString(): "\n" | "\r\n";
    getIndentationText(): any;
    getUsePrefixAndSuffixTextForRename(): any;
    getUseTrailingCommas(): any;
    set(settings: any): void;
    _getIndentSizeInSpaces(): 2 | 4 | 8;
}
export class MappedTypeNode extends TypeNode {
    getNameTypeNode(): any;
    getNameTypeNodeOrThrow(message: any): any;
    getReadonlyToken(): any;
    getReadonlyTokenOrThrow(message: any): any;
    getQuestionToken(): any;
    getQuestionTokenOrThrow(message: any): any;
    getTypeParameter(): any;
    getTypeNode(): any;
    getTypeNodeOrThrow(message: any): any;
}
export class MemberExpression extends LeftHandSideExpression {
}
export class MemoryEmitResult extends EmitResult {
    constructor(context: any, compilerObject: any, _files: any);
    _files: any;
    getFiles(): any;
    saveFiles(): Promise<any[]>;
    saveFilesSync(): void;
}
declare const MetaProperty_base: {
    new (): {
        [x: string]: any;
        getNameNode(): any;
        getName(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class MetaProperty extends MetaProperty_base {
    getKeywordToken(): any;
}
export const MetaPropertyBase: {
    new (): {
        [x: string]: any;
        getNameNode(): any;
        getName(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const MethodDeclaration_base: {
    new (): {
        [x: string]: any;
        setOrder(order: any): any;
    };
    [x: string]: any;
};
export class MethodDeclaration extends MethodDeclaration_base {
    set(structure: any): MethodDeclaration;
    addOverload(structure: any): any;
    addOverloads(structures: any): any[];
    insertOverload(index: any, structure: any): any;
    insertOverloads(index: any, structures: any): any[];
    getStructure(): any;
}
export const MethodDeclarationBase: {
    new (): {
        [x: string]: any;
        setOrder(order: any): any;
    };
    [x: string]: any;
};
export const MethodDeclarationOverloadBase: {
    new (): {
        [x: string]: any;
        getJsDocs(): any;
        addJsDoc(structure: any): any;
        addJsDocs(structures: any): any[];
        insertJsDoc(index: any, structure: any): any;
        insertJsDocs(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const MethodSignature_base: {
    new (): {
        [x: string]: any;
        setOrder(order: any): any;
    };
    [x: string]: any;
};
export class MethodSignature extends MethodSignature_base {
    set(structure: any): MethodSignature;
    getStructure(): any;
}
export const MethodSignatureBase: {
    new (): {
        [x: string]: any;
        setOrder(order: any): any;
    };
    [x: string]: any;
};
export function ModifierableNode(Base: any): {
    new (): {
        [x: string]: any;
        getModifiers(): any;
        getFirstModifierByKindOrThrow(kind: any, message: any): any;
        getFirstModifierByKind(kind: any): any;
        hasModifier(textOrKind: any): any;
        toggleModifier(text: any, value: any): any;
        addModifier(text: any): any;
        removeModifier(text: any): boolean;
        getCompilerModifiers(): any;
    };
    [x: string]: any;
};
declare const ModuleBlock_base: {
    new (): {
        [x: string]: any;
        getStatements(): any;
        getStatementsWithComments(): any;
        getStatement(findFunction: any): any;
        getStatementOrThrow(findFunction: any, message: any): any;
        getStatementByKind(kind: any): any;
        getStatementByKindOrThrow(kind: any, message: any): any;
        addStatements(textOrWriterFunction: any): any;
        insertStatements(index: any, statements: any): any;
        removeStatement(index: any): any;
        removeStatements(indexRange: any): any;
        addClass(structure: any): any;
        addClasses(structures: any): any[];
        insertClass(index: any, structure: any): any;
        insertClasses(index: any, structures: any): any[];
        getClasses(): any;
        getClass(nameOrFindFunction: any): any;
        getClassOrThrow(nameOrFindFunction: any): any;
        addEnum(structure: any): any;
        addEnums(structures: any): any[];
        insertEnum(index: any, structure: any): any;
        insertEnums(index: any, structures: any): any[];
        getEnums(): any;
        getEnum(nameOrFindFunction: any): any;
        getEnumOrThrow(nameOrFindFunction: any): any;
        addFunction(structure: any): any;
        addFunctions(structures: any): any[];
        insertFunction(index: any, structure: any): any;
        insertFunctions(index: any, structures: any): any[];
        getFunctions(): any;
        getFunction(nameOrFindFunction: any): any;
        getFunctionOrThrow(nameOrFindFunction: any): any;
        addInterface(structure: any): any;
        addInterfaces(structures: any): any[];
        insertInterface(index: any, structure: any): any;
        insertInterfaces(index: any, structures: any): any[];
        getInterfaces(): any;
        getInterface(nameOrFindFunction: any): any;
        getInterfaceOrThrow(nameOrFindFunction: any): any;
        addModule(structure: any): any;
        addModules(structures: any): any[];
        insertModule(index: any, structure: any): any;
        insertModules(index: any, structures: any): any[];
        getModules(): any;
        getModule(nameOrFindFunction: any): any;
        getModuleOrThrow(nameOrFindFunction: any): any;
        addTypeAlias(structure: any): any;
        addTypeAliases(structures: any): any[];
        insertTypeAlias(index: any, structure: any): any;
        insertTypeAliases(index: any, structures: any): any[];
        getTypeAliases(): any;
        getTypeAlias(nameOrFindFunction: any): any;
        getTypeAliasOrThrow(nameOrFindFunction: any): any;
        getVariableStatements(): any;
        getVariableStatement(nameOrFindFunction: any): any;
        getVariableStatementOrThrow(nameOrFindFunction: any, message: any): any;
        addVariableStatement(structure: any): any;
        addVariableStatements(structures: any): any[];
        insertVariableStatement(index: any, structure: any): any;
        insertVariableStatements(index: any, structures: any): any[];
        getVariableDeclarations(): any[];
        getVariableDeclaration(nameOrFindFunction: any): any;
        getVariableDeclarationOrThrow(nameOrFindFunction: any): any;
        getStructure(): any;
        set(structure: any): any;
        _getCompilerStatementsWithComments(): any;
        _getCompilerStatementsContainer(): any;
        _insertChildren(opts: any): any[];
        _standardWrite(writer: any, info: any, writeStructures: any, opts?: {}): void;
    };
    [x: string]: any;
};
export class ModuleBlock extends ModuleBlock_base {
}
export const ModuleBlockBase: {
    new (): {
        [x: string]: any;
        getStatements(): any;
        getStatementsWithComments(): any;
        getStatement(findFunction: any): any;
        getStatementOrThrow(findFunction: any, message: any): any;
        getStatementByKind(kind: any): any;
        getStatementByKindOrThrow(kind: any, message: any): any;
        addStatements(textOrWriterFunction: any): any;
        insertStatements(index: any, statements: any): any;
        removeStatement(index: any): any;
        removeStatements(indexRange: any): any;
        addClass(structure: any): any;
        addClasses(structures: any): any[];
        insertClass(index: any, structure: any): any;
        insertClasses(index: any, structures: any): any[];
        getClasses(): any;
        getClass(nameOrFindFunction: any): any;
        getClassOrThrow(nameOrFindFunction: any): any;
        addEnum(structure: any): any;
        addEnums(structures: any): any[];
        insertEnum(index: any, structure: any): any;
        insertEnums(index: any, structures: any): any[];
        getEnums(): any;
        getEnum(nameOrFindFunction: any): any;
        getEnumOrThrow(nameOrFindFunction: any): any;
        addFunction(structure: any): any;
        addFunctions(structures: any): any[];
        insertFunction(index: any, structure: any): any;
        insertFunctions(index: any, structures: any): any[];
        getFunctions(): any;
        getFunction(nameOrFindFunction: any): any;
        getFunctionOrThrow(nameOrFindFunction: any): any;
        addInterface(structure: any): any;
        addInterfaces(structures: any): any[];
        insertInterface(index: any, structure: any): any;
        insertInterfaces(index: any, structures: any): any[];
        getInterfaces(): any;
        getInterface(nameOrFindFunction: any): any;
        getInterfaceOrThrow(nameOrFindFunction: any): any;
        addModule(structure: any): any;
        addModules(structures: any): any[];
        insertModule(index: any, structure: any): any;
        insertModules(index: any, structures: any): any[];
        getModules(): any;
        getModule(nameOrFindFunction: any): any;
        getModuleOrThrow(nameOrFindFunction: any): any;
        addTypeAlias(structure: any): any;
        addTypeAliases(structures: any): any[];
        insertTypeAlias(index: any, structure: any): any;
        insertTypeAliases(index: any, structures: any): any[];
        getTypeAliases(): any;
        getTypeAlias(nameOrFindFunction: any): any;
        getTypeAliasOrThrow(nameOrFindFunction: any): any;
        getVariableStatements(): any;
        getVariableStatement(nameOrFindFunction: any): any;
        getVariableStatementOrThrow(nameOrFindFunction: any, message: any): any;
        addVariableStatement(structure: any): any;
        addVariableStatements(structures: any): any[];
        insertVariableStatement(index: any, structure: any): any;
        insertVariableStatements(index: any, structures: any): any[];
        getVariableDeclarations(): any[];
        getVariableDeclaration(nameOrFindFunction: any): any;
        getVariableDeclarationOrThrow(nameOrFindFunction: any): any;
        getStructure(): any;
        set(structure: any): any;
        _getCompilerStatementsWithComments(): any;
        _getCompilerStatementsContainer(): any;
        _insertChildren(opts: any): any[];
        _standardWrite(writer: any, info: any, writeStructures: any, opts?: {}): void;
    };
    [x: string]: any;
};
export function ModuleChildableNode(Base: any): {
    new (): {
        [x: string]: any;
        getParentModuleOrThrow(message: any): any;
        getParentModule(): any;
    };
    [x: string]: any;
};
declare const ModuleDeclaration_base: {
    new (): {
        [x: string]: any;
        addImportDeclaration(structure: any): any;
        addImportDeclarations(structures: any): any;
        insertImportDeclaration(index: any, structure: any): any;
        insertImportDeclarations(index: any, structures: any): any;
        getImportDeclaration(conditionOrModuleSpecifier: any): any;
        getImportDeclarationOrThrow(conditionOrModuleSpecifier: any, message: any): any;
        getImportDeclarations(): any;
        addExportDeclaration(structure: any): any;
        addExportDeclarations(structures: any): any;
        insertExportDeclaration(index: any, structure: any): any;
        insertExportDeclarations(index: any, structures: any): any;
        getExportDeclaration(conditionOrModuleSpecifier: any): any;
        getExportDeclarationOrThrow(conditionOrModuleSpecifier: any, message: any): any;
        getExportDeclarations(): any;
        addExportAssignment(structure: any): any;
        addExportAssignments(structures: any): any;
        insertExportAssignment(index: any, structure: any): any;
        insertExportAssignments(index: any, structures: any): any;
        getExportAssignment(condition: any): any;
        getExportAssignmentOrThrow(condition: any, message: any): any;
        getExportAssignments(): any;
        getDefaultExportSymbol(): any;
        getDefaultExportSymbolOrThrow(message: any): any;
        getExportSymbols(): any;
        getExportedDeclarations(): Map<any, any>;
        removeDefaultExport(defaultExportSymbol: any): any;
    };
    [x: string]: any;
};
export class ModuleDeclaration extends ModuleDeclaration_base {
    getName(): any;
    setName(newName: any): ModuleDeclaration;
    rename(newName: any, options: any): ModuleDeclaration;
    getNameNodes(): any;
    hasNamespaceKeyword(): boolean;
    hasModuleKeyword(): boolean;
    setDeclarationKind(kind: any): ModuleDeclaration;
    getDeclarationKind(): any;
    getDeclarationKindKeyword(): any;
    set(structure: any): ModuleDeclaration;
    getStructure(): any;
    _getInnerBody(): any;
}
export const ModuleDeclarationBase: {
    new (): {
        [x: string]: any;
        addImportDeclaration(structure: any): any;
        addImportDeclarations(structures: any): any;
        insertImportDeclaration(index: any, structure: any): any;
        insertImportDeclarations(index: any, structures: any): any;
        getImportDeclaration(conditionOrModuleSpecifier: any): any;
        getImportDeclarationOrThrow(conditionOrModuleSpecifier: any, message: any): any;
        getImportDeclarations(): any;
        addExportDeclaration(structure: any): any;
        addExportDeclarations(structures: any): any;
        insertExportDeclaration(index: any, structure: any): any;
        insertExportDeclarations(index: any, structures: any): any;
        getExportDeclaration(conditionOrModuleSpecifier: any): any;
        getExportDeclarationOrThrow(conditionOrModuleSpecifier: any, message: any): any;
        getExportDeclarations(): any;
        addExportAssignment(structure: any): any;
        addExportAssignments(structures: any): any;
        insertExportAssignment(index: any, structure: any): any;
        insertExportAssignments(index: any, structures: any): any;
        getExportAssignment(condition: any): any;
        getExportAssignmentOrThrow(condition: any, message: any): any;
        getExportAssignments(): any;
        getDefaultExportSymbol(): any;
        getDefaultExportSymbolOrThrow(message: any): any;
        getExportSymbols(): any;
        getExportedDeclarations(): Map<any, any>;
        removeDefaultExport(defaultExportSymbol: any): any;
    };
    [x: string]: any;
};
export var ModuleDeclarationKind: any;
export function ModuleNamedNode(Base: any): {
    new (): {
        [x: string]: any;
        getNameNode(): any;
        getName(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export function ModuledNode(Base: any): {
    new (): {
        [x: string]: any;
        addImportDeclaration(structure: any): any;
        addImportDeclarations(structures: any): any;
        insertImportDeclaration(index: any, structure: any): any;
        insertImportDeclarations(index: any, structures: any): any;
        getImportDeclaration(conditionOrModuleSpecifier: any): any;
        getImportDeclarationOrThrow(conditionOrModuleSpecifier: any, message: any): any;
        getImportDeclarations(): any;
        addExportDeclaration(structure: any): any;
        addExportDeclarations(structures: any): any;
        insertExportDeclaration(index: any, structure: any): any;
        insertExportDeclarations(index: any, structures: any): any;
        getExportDeclaration(conditionOrModuleSpecifier: any): any;
        getExportDeclarationOrThrow(conditionOrModuleSpecifier: any, message: any): any;
        getExportDeclarations(): any;
        addExportAssignment(structure: any): any;
        addExportAssignments(structures: any): any;
        insertExportAssignment(index: any, structure: any): any;
        insertExportAssignments(index: any, structures: any): any;
        getExportAssignment(condition: any): any;
        getExportAssignmentOrThrow(condition: any, message: any): any;
        getExportAssignments(): any;
        getDefaultExportSymbol(): any;
        getDefaultExportSymbolOrThrow(message: any): any;
        getExportSymbols(): any;
        getExportedDeclarations(): Map<any, any>;
        removeDefaultExport(defaultExportSymbol: any): any;
    };
    [x: string]: any;
};
export function NameableNode(Base: any): {
    new (): {
        [x: string]: any;
        getNameNode(): any;
        getNameNodeOrThrow(message: any): any;
        getName(): any;
        getNameOrThrow(message: any): any;
        rename(newName: any): any;
        removeName(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class NamedExports extends Node {
    getElements(): any;
}
export const NamedExportsBase: typeof Node;
export class NamedImports extends Node {
    getElements(): any;
}
export const NamedImportsBase: typeof Node;
export function NamedNode(Base: any): {
    new (): {
        [x: string]: any;
        getNameNode(): any;
        getName(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export function NamedNodeBase(Base: any): {
    new (): {
        [x: string]: any;
        getNameNode(): any;
        getName(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const NamedTupleMember_base: {
    new (): {
        [x: string]: any;
        getTypeNode(): any;
        getTypeNodeOrThrow(message: any): any;
        setType(textOrWriterFunction: any): any;
        set(structure: any): any;
        removeType(): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class NamedTupleMember extends NamedTupleMember_base {
    removeType(): void;
}
export const NamedTupleMemberBase: {
    new (): {
        [x: string]: any;
        getTypeNode(): any;
        getTypeNodeOrThrow(message: any): any;
        setType(textOrWriterFunction: any): any;
        set(structure: any): any;
        removeType(): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const NamespaceExport_base: {
    new (): {
        [x: string]: any;
        rename(newName: any, options: any): any;
    };
    [x: string]: any;
};
export class NamespaceExport extends NamespaceExport_base {
    setName(name: any): NamespaceExport;
    getName(): any;
    getNameNode(): any;
}
export const NamespaceExportBase: {
    new (): {
        [x: string]: any;
        rename(newName: any, options: any): any;
    };
    [x: string]: any;
};
declare const NamespaceImport_base: {
    new (): {
        [x: string]: any;
        rename(newName: any, options: any): any;
    };
    [x: string]: any;
};
export class NamespaceImport extends NamespaceImport_base {
    setName(name: any): NamespaceImport;
    getName(): any;
    getNameNode(): any;
}
export const NamespaceImportBase: {
    new (): {
        [x: string]: any;
        rename(newName: any, options: any): any;
    };
    [x: string]: any;
};
declare const NewExpression_base: {
    new (): {
        [x: string]: any;
        getTypeArguments(): any;
        addTypeArgument(argumentText: any): any;
        addTypeArguments(argumentTexts: any): any[];
        insertTypeArgument(index: any, argumentText: any): any;
        insertTypeArguments(index: any, argumentTexts: any): any[];
        removeTypeArgument(typeArgOrIndex: any): any;
    };
    [x: string]: any;
};
export class NewExpression extends NewExpression_base {
}
export const NewExpressionBase: {
    new (): {
        [x: string]: any;
        getTypeArguments(): any;
        addTypeArgument(argumentText: any): any;
        addTypeArguments(argumentTexts: any): any[];
        insertTypeArgument(index: any, argumentText: any): any;
        insertTypeArguments(index: any, argumentTexts: any): any[];
        removeTypeArgument(typeArgOrIndex: any): any;
    };
    [x: string]: any;
};
export class NoSubstitutionTemplateLiteral extends LiteralExpression {
    getLiteralValue(): any;
    setLiteralValue(value: any): any;
}
export const NoSubstitutionTemplateLiteralBase: typeof LiteralExpression;
export class Node {
    static hasExpression(node: any): boolean;
    static hasName(node: any): boolean;
    static hasBody(node: any): boolean;
    static hasStructure(node: any): boolean;
    static is(kind: any): (node: any) => boolean;
    static isNode(value: any): boolean;
    static isCommentNode(node: any): boolean;
    static isCommentStatement(node: any): boolean;
    static isCommentClassElement(node: any): boolean;
    static isCommentTypeElement(node: any): boolean;
    static isCommentObjectLiteralElement(node: any): boolean;
    static isCommentEnumMember(node: any): boolean;
    static isAbstractable(node: any): boolean;
    static isAmbientable(node: any): boolean;
    static isArgumented(node: any): boolean;
    static isArrayTypeNode(node: any): boolean;
    static isAssertionKeyNamed(node: any): boolean;
    static isAsyncable(node: any): boolean;
    static isAwaitable(node: any): boolean;
    static isBindingNamed(node: any): boolean;
    static isBodied(node: any): boolean;
    static isBodyable(node: any): boolean;
    static isCallSignatureDeclaration(node: any): boolean;
    static isChildOrderable(node: any): boolean;
    static isClassLikeDeclarationBase(node: any): boolean;
    static isConditionalTypeNode(node: any): boolean;
    static isConstructorDeclaration(node: any): boolean;
    static isConstructorTypeNode(node: any): boolean;
    static isConstructSignatureDeclaration(node: any): boolean;
    static isDecoratable(node: any): boolean;
    static isDotDotDotTokenable(node: any): boolean;
    static isExclamationTokenable(node: any): boolean;
    static isExportable(node: any): boolean;
    static isExportGetable(node: any): boolean;
    static isExpression(node: any): boolean;
    static isExpressionable(node: any): boolean;
    static isExpressioned(node: any): boolean;
    static isExtendsClauseable(node: any): boolean;
    static isFalseLiteral(node: any): boolean;
    static isFunctionLikeDeclaration(node: any): boolean;
    static isFunctionTypeNode(node: any): boolean;
    static isGeneratorable(node: any): boolean;
    static isGetAccessorDeclaration(node: any): boolean;
    static isHeritageClauseable(node: any): boolean;
    static isImplementsClauseable(node: any): boolean;
    static isImportExpression(node: any): boolean;
    static isImportTypeNode(node: any): boolean;
    static isIndexedAccessTypeNode(node: any): boolean;
    static isIndexSignatureDeclaration(node: any): boolean;
    static isInferTypeNode(node: any): boolean;
    static isInitializerExpressionable(node: any): boolean;
    static isInitializerExpressionGetable(node: any): boolean;
    static isIntersectionTypeNode(node: any): boolean;
    static isIterationStatement(node: any): boolean;
    static isJSDocable(node: any): boolean;
    static isJSDocPropertyLikeTag(node: any): boolean;
    static isJSDocTag(node: any): boolean;
    static isJSDocType(node: any): boolean;
    static isJSDocTypeExpressionableTag(node: any): boolean;
    static isJSDocTypeParameteredTag(node: any): boolean;
    static isJSDocUnknownTag(node: any): boolean;
    static isJsxAttributed(node: any): boolean;
    static isJsxTagNamed(node: any): boolean;
    static isLeftHandSideExpression(node: any): boolean;
    static isLeftHandSideExpressioned(node: any): boolean;
    static isLiteralExpression(node: any): boolean;
    static isLiteralLike(node: any): boolean;
    static isLiteralTypeNode(node: any): boolean;
    static isMappedTypeNode(node: any): boolean;
    static isMemberExpression(node: any): boolean;
    static isModifierable(node: any): boolean;
    static isModuleChildable(node: any): boolean;
    static isModuled(node: any): boolean;
    static isModuleNamed(node: any): boolean;
    static isNameable(node: any): boolean;
    static isNamed(node: any): boolean;
    static isNodeWithTypeArguments(node: any): boolean;
    static isNullLiteral(node: any): boolean;
    static isOverloadable(node: any): boolean;
    static isOverrideable(node: any): boolean;
    static isParameterDeclaration(node: any): boolean;
    static isParametered(node: any): boolean;
    static isParenthesizedTypeNode(node: any): boolean;
    static isPrimaryExpression(node: any): boolean;
    static isPropertyNamed(node: any): boolean;
    static isQuestionDotTokenable(node: any): boolean;
    static isQuestionTokenable(node: any): boolean;
    static isReadonlyable(node: any): boolean;
    static isReferenceFindable(node: any): boolean;
    static isRenameable(node: any): boolean;
    static isReturnTyped(node: any): boolean;
    static isSatisfiesExpression(node: any): boolean;
    static isScopeable(node: any): boolean;
    static isScoped(node: any): boolean;
    static isSetAccessorDeclaration(node: any): boolean;
    static isSignaturedDeclaration(node: any): boolean;
    static isStatement(node: any): boolean;
    static isStatemented(node: any): boolean;
    static isStaticable(node: any): boolean;
    static isSuperExpression(node: any): boolean;
    static isTemplateLiteralTypeNode(node: any): boolean;
    static isTextInsertable(node: any): boolean;
    static isThisExpression(node: any): boolean;
    static isThisTypeNode(node: any): boolean;
    static isTrueLiteral(node: any): boolean;
    static isTupleTypeNode(node: any): boolean;
    static isTypeArgumented(node: any): boolean;
    static isTypeAssertion(node: any): boolean;
    static isTyped(node: any): boolean;
    static isTypeElement(node: any): boolean;
    static isTypeElementMembered(node: any): boolean;
    static isTypeLiteral(node: any): boolean;
    static isTypeNode(node: any): boolean;
    static isTypeOperatorTypeNode(node: any): boolean;
    static isTypeParameterDeclaration(node: any): boolean;
    static isTypeParametered(node: any): boolean;
    static isTypePredicate(node: any): boolean;
    static isTypeQuery(node: any): boolean;
    static isTypeReference(node: any): boolean;
    static isUnaryExpression(node: any): boolean;
    static isUnaryExpressioned(node: any): boolean;
    static isUnionTypeNode(node: any): boolean;
    static isUnwrappable(node: any): boolean;
    static isUpdateExpression(node: any): boolean;
    static _hasStructure(node: any): boolean;
    constructor(context: any, node: any, sourceFile: any);
    get _sourceFile(): any;
    get compilerNode(): any;
    _wrappedChildCount: number;
    _context: any;
    _compilerNode: any;
    __sourceFile: any;
    forget(): void;
    forgetDescendants(): Node;
    _forgetOnlyThis(): void;
    wasForgotten(): boolean;
    _hasWrappedChildren(): boolean;
    _replaceCompilerNodeFromFactory(compilerNode: any): void;
    _storeTextForForgetting(): void;
    _forgottenText: any;
    _clearInternals(): void;
    _childStringRanges: any[] | undefined;
    getKind(): any;
    getKindName(): string;
    getFlags(): any;
    print(options?: {}): string;
    getSymbolOrThrow(message: any): any;
    getSymbol(): any;
    getSymbolsInScope(meaning: any): any;
    getLocalOrThrow(name: any, message: any): any;
    getLocal(name: any): any;
    getLocals(): any[];
    _getCompilerLocals(): any;
    getType(): any;
    containsRange(pos: any, end: any): boolean;
    isInStringAtPos(pos: any): boolean;
    asKindOrThrow(kind: any, message: any): Node;
    isKind(kind: any): boolean;
    asKind(kind: any): Node | undefined;
    getFirstChildOrThrow(condition: any, message: any): any;
    getFirstChild(condition: any): any;
    getLastChildOrThrow(condition: any, message: any): any;
    getLastChild(condition: any): any;
    getFirstDescendantOrThrow(condition: any, message: any): any;
    getFirstDescendant(condition: any): any;
    getPreviousSiblingOrThrow(condition: any, message: any): any;
    getPreviousSibling(condition: any): any;
    getNextSiblingOrThrow(condition: any, message: any): any;
    getNextSibling(condition: any): any;
    getPreviousSiblings(): any[];
    getNextSiblings(): any[];
    getChildren(): any;
    getChildAtIndex(index: any): any;
    _getChildrenIterator(): Generator<any, void, unknown>;
    _getChildrenInCacheIterator(): Generator<any, void, unknown>;
    getChildSyntaxListOrThrow(message: any): any;
    getChildSyntaxList(): any;
    forEachChild(cbNode: any, cbNodeArray: any): any;
    forEachDescendant(cbNode: any, cbNodeArray: any): any;
    forEachChildAsArray(): any[];
    forEachDescendantAsArray(): any[];
    getDescendants(): any[];
    _getDescendantsIterator(): Generator<any, void, unknown>;
    getDescendantStatements(): any[];
    getChildCount(): any;
    getChildAtPos(pos: any): any;
    getDescendantAtPos(pos: any): any;
    getDescendantAtStartWithWidth(start: any, width: any): undefined;
    getPos(): any;
    getEnd(): any;
    getStart(includeJsDocComments: any): any;
    getFullStart(): any;
    getNonWhitespaceStart(): any;
    _getTrailingTriviaNonWhitespaceEnd(): any;
    getWidth(includeJsDocComments: any): number;
    getFullWidth(): any;
    getLeadingTriviaWidth(): any;
    getTrailingTriviaWidth(): number;
    getTrailingTriviaEnd(): any;
    getText(includeJsDocCommentOrOptions: any): any;
    getFullText(): any;
    getCombinedModifierFlags(): ts.ModifierFlags;
    getSourceFile(): any;
    getProject(): any;
    getNodeProperty(propertyName: any): any;
    getAncestors(includeSyntaxLists?: boolean): any[];
    _getAncestorsIterator(includeSyntaxLists: any): Generator<any, void, unknown>;
    getParent(): any;
    getParentOrThrow(message: any): any;
    getParentWhileOrThrow(condition: any, message: any): any;
    getParentWhile(condition: any): any;
    getParentWhileKindOrThrow(kind: any, message: any): any;
    getParentWhileKind(kind: any): any;
    getLastToken(): any;
    isInSyntaxList(): boolean;
    getParentSyntaxListOrThrow(message: any): any;
    getParentSyntaxList(): any;
    _getParentSyntaxListIfWrapped(): any;
    getChildIndex(): any;
    getIndentationLevel(): number;
    getChildIndentationLevel(): number;
    getIndentationText(offset?: number): any;
    getChildIndentationText(offset?: number): any;
    _getIndentationTextForLevel(level: any): any;
    getStartLinePos(includeJsDocComments: any): any;
    getStartLineNumber(includeJsDocComments: any): number;
    getEndLineNumber(): number;
    isFirstNodeOnLine(): boolean;
    replaceWithText(textOrWriterFunction: any, writer: any): any;
    prependWhitespace(textOrWriterFunction: any): void;
    appendWhitespace(textOrWriterFunction: any): void;
    formatText(settings?: {}): void;
    transform(visitNode: any): any;
    getLeadingCommentRanges(): any;
    _leadingCommentRanges: any;
    getTrailingCommentRanges(): any;
    _trailingCommentRanges: any;
    _getCommentsAtPos(pos: any, getComments: any): any;
    getChildrenOfKind(kind: any): any;
    getFirstChildByKindOrThrow(kind: any, message: any): any;
    getFirstChildByKind(kind: any): any;
    getFirstChildIfKindOrThrow(kind: any, message: any): any;
    getFirstChildIfKind(kind: any): any;
    getLastChildByKindOrThrow(kind: any, message: any): any;
    getLastChildByKind(kind: any): any;
    getLastChildIfKindOrThrow(kind: any, message: any): any;
    getLastChildIfKind(kind: any): any;
    getChildAtIndexIfKindOrThrow(index: any, kind: any, message: any): any;
    getChildAtIndexIfKind(index: any, kind: any): any;
    getPreviousSiblingIfKindOrThrow(kind: any, message: any): any;
    getNextSiblingIfKindOrThrow(kind: any, message: any): any;
    getPreviousSiblingIfKind(kind: any): any;
    getNextSiblingIfKind(kind: any): any;
    getParentIfOrThrow(condition: any, message: any): any;
    getParentIf(condition: any): any;
    getParentIfKindOrThrow(kind: any, message: any): any;
    getParentIfKind(kind: any): any;
    getFirstAncestorByKindOrThrow(kind: any, message: any): any;
    getFirstAncestorByKind(kind: any): any;
    getFirstAncestorOrThrow(condition: any, message: any): any;
    getFirstAncestor(condition: any): any;
    getDescendantsOfKind(kind: any): any[];
    getFirstDescendantByKindOrThrow(kind: any, message: any): any;
    getFirstDescendantByKind(kind: any): any;
    _getCompilerChildren(): any;
    _getCompilerForEachChildren(): any;
    _getCompilerChildrenFast(): any;
    _getCompilerChildrenOfKind(kind: any): any;
    _getCompilerDescendantsOfKindIterator(kind: any): Generator<any, void, unknown>;
    _getCompilerDescendantsIterator(): any;
    _getCompilerForEachDescendantsIterator(): any;
    _getCompilerFirstChild(condition: any): any;
    _getCompilerLastChild(condition: any): any;
    _getCompilerPreviousSiblings(): any[];
    _getCompilerNextSiblings(): any[];
    _getCompilerPreviousSibling(condition: any): any;
    _getCompilerNextSibling(condition: any): any;
    _getCompilerChildAtIndex(index: any): any;
    _getWriterWithIndentation(): any;
    _getWriterWithQueuedIndentation(): any;
    _getWriterWithChildIndentation(): any;
    _getWriterWithQueuedChildIndentation(): any;
    _getTextWithQueuedChildIndentation(textOrWriterFunc: any): any;
    _getWriter(): any;
    _getNodeFromCompilerNode(compilerNode: any): any;
    _getNodeFromCompilerNodeIfExists(compilerNode: any): any;
    _ensureBound(): void;
}
export namespace Node {
    function isAnyKeyword(node: any): boolean;
    function isArrayBindingPattern(node: any): boolean;
    function isArrayLiteralExpression(node: any): boolean;
    function isArrowFunction(node: any): boolean;
    function isAsExpression(node: any): boolean;
    function isAssertClause(node: any): boolean;
    function isAssertEntry(node: any): boolean;
    function isAwaitExpression(node: any): boolean;
    function isBigIntLiteral(node: any): boolean;
    function isBinaryExpression(node: any): boolean;
    function isBindingElement(node: any): boolean;
    function isBlock(node: any): boolean;
    function isBooleanKeyword(node: any): boolean;
    function isBreakStatement(node: any): boolean;
    function isCallExpression(node: any): boolean;
    function isCaseBlock(node: any): boolean;
    function isCaseClause(node: any): boolean;
    function isCatchClause(node: any): boolean;
    function isClassDeclaration(node: any): boolean;
    function isClassExpression(node: any): boolean;
    function isClassStaticBlockDeclaration(node: any): boolean;
    function isCommaListExpression(node: any): boolean;
    function isComputedPropertyName(node: any): boolean;
    function isConditionalExpression(node: any): boolean;
    function isContinueStatement(node: any): boolean;
    function isDebuggerStatement(node: any): boolean;
    function isDecorator(node: any): boolean;
    function isDefaultClause(node: any): boolean;
    function isDeleteExpression(node: any): boolean;
    function isDoStatement(node: any): boolean;
    function isElementAccessExpression(node: any): boolean;
    function isEmptyStatement(node: any): boolean;
    function isEnumDeclaration(node: any): boolean;
    function isEnumMember(node: any): boolean;
    function isExportAssignment(node: any): boolean;
    function isExportDeclaration(node: any): boolean;
    function isExportSpecifier(node: any): boolean;
    function isExpressionStatement(node: any): boolean;
    function isExpressionWithTypeArguments(node: any): boolean;
    function isExternalModuleReference(node: any): boolean;
    function isForInStatement(node: any): boolean;
    function isForOfStatement(node: any): boolean;
    function isForStatement(node: any): boolean;
    function isFunctionDeclaration(node: any): boolean;
    function isFunctionExpression(node: any): boolean;
    function isHeritageClause(node: any): boolean;
    function isIdentifier(node: any): boolean;
    function isIfStatement(node: any): boolean;
    function isImportClause(node: any): boolean;
    function isImportDeclaration(node: any): boolean;
    function isImportEqualsDeclaration(node: any): boolean;
    function isImportSpecifier(node: any): boolean;
    function isImportTypeAssertionContainer(node: any): boolean;
    function isInferKeyword(node: any): boolean;
    function isInterfaceDeclaration(node: any): boolean;
    function isJSDoc(node: any): boolean;
    function isJSDocAllType(node: any): boolean;
    function isJSDocAugmentsTag(node: any): boolean;
    function isJSDocAuthorTag(node: any): boolean;
    function isJSDocCallbackTag(node: any): boolean;
    function isJSDocClassTag(node: any): boolean;
    function isJSDocDeprecatedTag(node: any): boolean;
    function isJSDocEnumTag(node: any): boolean;
    function isJSDocFunctionType(node: any): boolean;
    function isJSDocImplementsTag(node: any): boolean;
    function isJSDocLink(node: any): boolean;
    function isJSDocLinkCode(node: any): boolean;
    function isJSDocLinkPlain(node: any): boolean;
    function isJSDocMemberName(node: any): boolean;
    function isJSDocNamepathType(node: any): boolean;
    function isJSDocNameReference(node: any): boolean;
    function isJSDocNonNullableType(node: any): boolean;
    function isJSDocNullableType(node: any): boolean;
    function isJSDocOptionalType(node: any): boolean;
    function isJSDocOverrideTag(node: any): boolean;
    function isJSDocParameterTag(node: any): boolean;
    function isJSDocPrivateTag(node: any): boolean;
    function isJSDocPropertyTag(node: any): boolean;
    function isJSDocProtectedTag(node: any): boolean;
    function isJSDocPublicTag(node: any): boolean;
    function isJSDocReadonlyTag(node: any): boolean;
    function isJSDocReturnTag(node: any): boolean;
    function isJSDocSeeTag(node: any): boolean;
    function isJSDocSignature(node: any): boolean;
    function isJSDocTemplateTag(node: any): boolean;
    function isJSDocText(node: any): boolean;
    function isJSDocThisTag(node: any): boolean;
    function isJSDocTypedefTag(node: any): boolean;
    function isJSDocTypeExpression(node: any): boolean;
    function isJSDocTypeLiteral(node: any): boolean;
    function isJSDocTypeTag(node: any): boolean;
    function isJSDocUnknownType(node: any): boolean;
    function isJSDocVariadicType(node: any): boolean;
    function isJsxAttribute(node: any): boolean;
    function isJsxClosingElement(node: any): boolean;
    function isJsxClosingFragment(node: any): boolean;
    function isJsxElement(node: any): boolean;
    function isJsxExpression(node: any): boolean;
    function isJsxFragment(node: any): boolean;
    function isJsxOpeningElement(node: any): boolean;
    function isJsxOpeningFragment(node: any): boolean;
    function isJsxSelfClosingElement(node: any): boolean;
    function isJsxSpreadAttribute(node: any): boolean;
    function isJsxText(node: any): boolean;
    function isLabeledStatement(node: any): boolean;
    function isMetaProperty(node: any): boolean;
    function isMethodDeclaration(node: any): boolean;
    function isMethodSignature(node: any): boolean;
    function isModuleBlock(node: any): boolean;
    function isModuleDeclaration(node: any): boolean;
    function isNamedExports(node: any): boolean;
    function isNamedImports(node: any): boolean;
    function isNamedTupleMember(node: any): boolean;
    function isNamespaceExport(node: any): boolean;
    function isNamespaceImport(node: any): boolean;
    function isNeverKeyword(node: any): boolean;
    function isNewExpression(node: any): boolean;
    function isNonNullExpression(node: any): boolean;
    function isNoSubstitutionTemplateLiteral(node: any): boolean;
    function isNotEmittedStatement(node: any): boolean;
    function isNumberKeyword(node: any): boolean;
    function isNumericLiteral(node: any): boolean;
    function isObjectBindingPattern(node: any): boolean;
    function isObjectKeyword(node: any): boolean;
    function isObjectLiteralExpression(node: any): boolean;
    function isOmittedExpression(node: any): boolean;
    function isParenthesizedExpression(node: any): boolean;
    function isPartiallyEmittedExpression(node: any): boolean;
    function isPostfixUnaryExpression(node: any): boolean;
    function isPrefixUnaryExpression(node: any): boolean;
    function isPrivateIdentifier(node: any): boolean;
    function isPropertyAccessExpression(node: any): boolean;
    function isPropertyAssignment(node: any): boolean;
    function isPropertyDeclaration(node: any): boolean;
    function isPropertySignature(node: any): boolean;
    function isQualifiedName(node: any): boolean;
    function isRegularExpressionLiteral(node: any): boolean;
    function isReturnStatement(node: any): boolean;
    function isSemicolonToken(node: any): boolean;
    function isShorthandPropertyAssignment(node: any): boolean;
    function isSourceFile(node: any): boolean;
    function isSpreadAssignment(node: any): boolean;
    function isSpreadElement(node: any): boolean;
    function isStringKeyword(node: any): boolean;
    function isStringLiteral(node: any): boolean;
    function isSwitchStatement(node: any): boolean;
    function isSymbolKeyword(node: any): boolean;
    function isSyntaxList(node: any): boolean;
    function isTaggedTemplateExpression(node: any): boolean;
    function isTemplateExpression(node: any): boolean;
    function isTemplateHead(node: any): boolean;
    function isTemplateMiddle(node: any): boolean;
    function isTemplateSpan(node: any): boolean;
    function isTemplateTail(node: any): boolean;
    function isThrowStatement(node: any): boolean;
    function isTryStatement(node: any): boolean;
    function isTypeAliasDeclaration(node: any): boolean;
    function isTypeOfExpression(node: any): boolean;
    function isUndefinedKeyword(node: any): boolean;
    function isVariableDeclaration(node: any): boolean;
    function isVariableDeclarationList(node: any): boolean;
    function isVariableStatement(node: any): boolean;
    function isVoidExpression(node: any): boolean;
    function isWhileStatement(node: any): boolean;
    function isWithStatement(node: any): boolean;
    function isYieldExpression(node: any): boolean;
}
declare const NodeWithTypeArguments_base: {
    new (): {
        [x: string]: any;
        getTypeArguments(): any;
        addTypeArgument(argumentText: any): any;
        addTypeArguments(argumentTexts: any): any[];
        insertTypeArgument(index: any, argumentText: any): any;
        insertTypeArguments(index: any, argumentTexts: any): any[];
        removeTypeArgument(typeArgOrIndex: any): any;
    };
    [x: string]: any;
};
export class NodeWithTypeArguments extends NodeWithTypeArguments_base {
}
export const NodeWithTypeArgumentsBase: {
    new (): {
        [x: string]: any;
        getTypeArguments(): any;
        addTypeArgument(argumentText: any): any;
        addTypeArguments(argumentTexts: any): any[];
        insertTypeArgument(index: any, argumentText: any): any;
        insertTypeArguments(index: any, argumentTexts: any): any[];
        removeTypeArgument(typeArgOrIndex: any): any;
    };
    [x: string]: any;
};
declare const NonNullExpression_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class NonNullExpression extends NonNullExpression_base {
}
export const NonNullExpressionBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class NotEmittedStatement extends Statement {
}
export const NotEmittedStatementBase: typeof Statement;
export const NotImplementedError: typeof errors.NotImplementedError;
export const NotSupportedError: typeof errors.NotSupportedError;
export class NullLiteral extends PrimaryExpression {
}
export const NullLiteralBase: typeof PrimaryExpression;
export class NumericLiteral extends LiteralExpression {
    getLiteralValue(): number;
    setLiteralValue(value: any): NumericLiteral;
}
export const NumericLiteralBase: typeof LiteralExpression;
export class ObjectBindingPattern extends Node {
    getElements(): any;
}
export class ObjectDestructuringAssignment extends AssignmentExpression {
}
export const ObjectDestructuringAssignmentBase: typeof AssignmentExpression;
export class ObjectLiteralElement extends Node {
    remove(): void;
}
export class ObjectLiteralExpression extends PrimaryExpression {
    getPropertyOrThrow(nameOrFindFunction: any): any;
    getProperty(nameOrFindFunction: any): any;
    getProperties(): any;
    getPropertiesWithComments(): any;
    _getAddIndex(): any;
    addProperty(structure: any): any;
    addProperties(structures: any): any[];
    insertProperty(index: any, structure: any): any;
    insertProperties(index: any, structures: any): any[];
    addPropertyAssignment(structure: any): any;
    addPropertyAssignments(structures: any): any[];
    insertPropertyAssignment(index: any, structure: any): any;
    insertPropertyAssignments(index: any, structures: any): any[];
    addShorthandPropertyAssignment(structure: any): any;
    addShorthandPropertyAssignments(structures: any): any[];
    insertShorthandPropertyAssignment(index: any, structure: any): any;
    insertShorthandPropertyAssignments(index: any, structures: any): any[];
    addSpreadAssignment(structure: any): any;
    addSpreadAssignments(structures: any): any[];
    insertSpreadAssignment(index: any, structure: any): any;
    insertSpreadAssignments(index: any, structures: any): any[];
    addMethod(structure: any): any;
    addMethods(structures: any): any[];
    insertMethod(index: any, structure: any): any;
    insertMethods(index: any, structures: any): any[];
    addGetAccessor(structure: any): any;
    addGetAccessors(structures: any): any[];
    insertGetAccessor(index: any, structure: any): any;
    insertGetAccessors(index: any, structures: any): any[];
    addSetAccessor(structure: any): any;
    addSetAccessors(structures: any): any[];
    insertSetAccessor(index: any, structure: any): any;
    insertSetAccessors(index: any, structures: any): any[];
    _insertProperty(index: any, structures: any, createStructurePrinter: any): any[];
}
export const ObjectLiteralExpressionBase: typeof PrimaryExpression;
export class OmittedExpression extends Expression {
}
export const OmittedExpressionBase: typeof Expression;
export class OutputFile {
    constructor(context: any, compilerObject: any);
    _compilerObject: any;
    _context: any;
    get compilerObject(): any;
    getFilePath(): any;
    getWriteByteOrderMark(): any;
    getText(): any;
}
export function OverloadableNode(Base: any): {
    new (): {
        [x: string]: any;
        getOverloads(): any;
        getImplementation(): any;
        getImplementationOrThrow(message: any): any;
        isOverload(): boolean;
        isImplementation(): boolean;
    };
    [x: string]: any;
};
export function OverrideableNode(Base: any): {
    new (): {
        [x: string]: any;
        hasOverrideKeyword(): any;
        getOverrideKeyword(): any;
        getOverrideKeywordOrThrow(message: any): any;
        setHasOverrideKeyword(value: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const ParameterDeclaration_base: {
    new (): {
        [x: string]: any;
        hasOverrideKeyword(): any;
        getOverrideKeyword(): any;
        getOverrideKeywordOrThrow(message: any): any;
        setHasOverrideKeyword(value: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class ParameterDeclaration extends ParameterDeclaration_base {
    isRestParameter(): boolean;
    isParameterProperty(): any;
    setIsRestParameter(value: any): ParameterDeclaration;
    isOptional(): any;
    remove(): void;
    set(structure: any): ParameterDeclaration;
    setHasQuestionToken(value: any): ParameterDeclaration;
    setInitializer(textOrWriterFunction: any): ParameterDeclaration;
    setType(textOrWriterFunction: any): ParameterDeclaration;
}
export const ParameterDeclarationBase: {
    new (): {
        [x: string]: any;
        hasOverrideKeyword(): any;
        getOverrideKeyword(): any;
        getOverrideKeywordOrThrow(message: any): any;
        setHasOverrideKeyword(value: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export function ParameteredNode(Base: any): {
    new (): {
        [x: string]: any;
        getParameter(nameOrFindFunction: any): any;
        getParameterOrThrow(nameOrFindFunction: any): any;
        getParameters(): any;
        addParameter(structure: any): any;
        addParameters(structures: any): any[];
        insertParameter(index: any, structure: any): any;
        insertParameters(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const ParenthesizedExpression_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class ParenthesizedExpression extends ParenthesizedExpression_base {
}
export const ParenthesizedExpressionBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class ParenthesizedTypeNode extends TypeNode {
    getTypeNode(): any;
    setType(textOrWriterFunction: any): ParenthesizedTypeNode;
}
declare const PartiallyEmittedExpression_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class PartiallyEmittedExpression extends PartiallyEmittedExpression_base {
}
export const PartiallyEmittedExpressionBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export const PathNotFoundError: typeof errors.PathNotFoundError;
export class PostfixUnaryExpression extends UnaryExpression {
    getOperatorToken(): any;
    getOperand(): any;
}
export const PostfixUnaryExpressionBase: typeof UnaryExpression;
export class PrefixUnaryExpression extends UnaryExpression {
    getOperatorToken(): any;
    getOperand(): any;
}
export const PrefixUnaryExpressionBase: typeof UnaryExpression;
export class PrimaryExpression extends MemberExpression {
}
declare const PrivateIdentifier_base: {
    new (): {
        [x: string]: any;
        getText(): any;
        getDefinitionNodes(): any;
        getDefinitions(): any;
    };
    [x: string]: any;
};
export class PrivateIdentifier extends PrivateIdentifier_base {
}
export const PrivateIdentifierBase: {
    new (): {
        [x: string]: any;
        getText(): any;
        getDefinitionNodes(): any;
        getDefinitions(): any;
    };
    [x: string]: any;
};
export class Program {
    constructor(opts: any);
    _context: any;
    _configFileParsingDiagnostics: any;
    _typeChecker: TypeChecker;
    get compilerObject(): any;
    _isCompilerProgramCreated(): boolean;
    _reset(rootNames: any, host: any): void;
    _getOrCreateCompilerObject: (() => any) | undefined;
    _createdCompilerObject: any;
    _oldProgram: any;
    getTypeChecker(): TypeChecker;
    emit(options?: {}): Promise<EmitResult>;
    emitSync(options?: {}): EmitResult;
    emitToMemory(options?: {}): MemoryEmitResult;
    _emit(options?: {}): any;
    getSyntacticDiagnostics(sourceFile: any): any;
    getSemanticDiagnostics(sourceFile: any): any;
    getDeclarationDiagnostics(sourceFile: any): any;
    getGlobalDiagnostics(): any;
    getConfigFileParsingDiagnostics(): any;
    getEmitModuleResolutionKind(): any;
    isSourceFileFromExternalLibrary(sourceFile: any): any;
}
export class Project {
    constructor(options?: {});
    _context: ProjectContext;
    get manipulationSettings(): ManipulationSettingsContainer;
    get compilerOptions(): any;
    resolveSourceFileDependencies(): any[];
    addDirectoryAtPathIfExists(dirPath: any, options?: {}): any;
    addDirectoryAtPath(dirPath: any, options?: {}): any;
    createDirectory(dirPath: any): any;
    getDirectoryOrThrow(dirPath: any, message: any): any;
    getDirectory(dirPath: any): any;
    getDirectories(): any[];
    getRootDirectories(): any[];
    addSourceFilesAtPaths(fileGlobs: any): any[];
    addSourceFileAtPathIfExists(filePath: any): any;
    addSourceFileAtPath(filePath: any): any;
    addSourceFilesFromTsConfig(tsConfigFilePath: any): any;
    _addSourceFilesForTsConfigResolver(tsConfigResolver: any, compilerOptions: any): any;
    createSourceFile(filePath: any, sourceFileText: any, options: any): any;
    removeSourceFile(sourceFile: any): boolean;
    getSourceFileOrThrow(fileNameOrSearchFunction: any): any;
    getSourceFile(fileNameOrSearchFunction: any): any;
    getSourceFiles(globPatterns: any): any[];
    _getProjectSourceFilesByDirectoryDepth(): Generator<any, void, unknown>;
    _getProjectDirectoriesByDirectoryDepth(): Generator<any, void, unknown>;
    getAmbientModule(moduleName: any): any;
    getAmbientModuleOrThrow(moduleName: any, message: any): any;
    getAmbientModules(): any;
    save(): Promise<void>;
    saveSync(): void;
    enableLogging(enabled?: boolean): void;
    _getUnsavedSourceFiles(): any[];
    getPreEmitDiagnostics(): Diagnostic[];
    getLanguageService(): LanguageService;
    getProgram(): Program;
    getTypeChecker(): TypeChecker;
    getFileSystem(): any;
    emit(emitOptions?: {}): Promise<EmitResult>;
    emitSync(emitOptions?: {}): EmitResult;
    emitToMemory(emitOptions?: {}): MemoryEmitResult;
    getCompilerOptions(): any;
    getConfigFileParsingDiagnostics(): any;
    createWriter(): CodeBlockWriter;
    forgetNodesCreatedInBlock(block: any): any;
    formatDiagnosticsWithColorAndContext(diagnostics: any, opts?: {}): string;
    getModuleResolutionHost(): ts.ModuleResolutionHost;
}
declare const PropertyAccessExpression_base: {
    new (): {
        [x: string]: any;
        getNameNode(): any;
        getName(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class PropertyAccessExpression extends PropertyAccessExpression_base {
}
export const PropertyAccessExpressionBase: {
    new (): {
        [x: string]: any;
        getNameNode(): any;
        getName(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const PropertyAssignment_base: {
    new (): {
        [x: string]: any;
        hasInitializer(): boolean;
        getInitializerIfKindOrThrow(kind: any, message: any): any;
        getInitializerIfKind(kind: any): any;
        getInitializerOrThrow(message: any): any;
        getInitializer(): any;
    };
    [x: string]: any;
};
export class PropertyAssignment extends PropertyAssignment_base {
    removeInitializer(): any;
    setInitializer(textOrWriterFunction: any): PropertyAssignment;
    set(structure: any): any;
    getStructure(): any;
}
export const PropertyAssignmentBase: {
    new (): {
        [x: string]: any;
        hasInitializer(): boolean;
        getInitializerIfKindOrThrow(kind: any, message: any): any;
        getInitializerIfKind(kind: any): any;
        getInitializerOrThrow(message: any): any;
        getInitializer(): any;
    };
    [x: string]: any;
};
declare const PropertyDeclaration_base: {
    new (): {
        [x: string]: any;
        setOrder(order: any): any;
    };
    [x: string]: any;
};
export class PropertyDeclaration extends PropertyDeclaration_base {
    hasAccessorKeyword(): any;
    setHasAccessorKeyword(value: any): any;
    set(structure: any): PropertyDeclaration;
    remove(): void;
    getStructure(): any;
}
export const PropertyDeclarationBase: {
    new (): {
        [x: string]: any;
        setOrder(order: any): any;
    };
    [x: string]: any;
};
export function PropertyNamedNode(Base: any): {
    new (): {
        [x: string]: any;
        getNameNode(): any;
        getName(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const PropertySignature_base: {
    new (): {
        [x: string]: any;
        setOrder(order: any): any;
    };
    [x: string]: any;
};
export class PropertySignature extends PropertySignature_base {
    set(structure: any): PropertySignature;
    getStructure(): any;
}
export const PropertySignatureBase: {
    new (): {
        [x: string]: any;
        setOrder(order: any): any;
    };
    [x: string]: any;
};
export class QualifiedName extends Node {
    getLeft(): any;
    getRight(): any;
}
export function QuestionDotTokenableNode(Base: any): {
    new (): {
        [x: string]: any;
        hasQuestionDotToken(): boolean;
        getQuestionDotTokenNode(): any;
        getQuestionDotTokenNodeOrThrow(message: any): any;
        setHasQuestionDotToken(value: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export function QuestionTokenableNode(Base: any): {
    new (): {
        [x: string]: any;
        hasQuestionToken(): boolean;
        getQuestionTokenNode(): any;
        getQuestionTokenNodeOrThrow(message: any): any;
        setHasQuestionToken(value: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export var QuoteKind: any;
export function ReadonlyableNode(Base: any): {
    new (): {
        [x: string]: any;
        isReadonly(): boolean;
        getReadonlyKeyword(): any;
        getReadonlyKeywordOrThrow(message: any): any;
        setIsReadonly(value: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class RefactorEditInfo {
    constructor(context: any, compilerObject: any);
    _context: any;
    _compilerObject: any;
    get compilerObject(): any;
    getEdits(): any;
    getRenameFilePath(): any;
    getRenameLocation(): any;
    applyChanges(options: any): RefactorEditInfo;
}
export class ReferenceEntry extends DocumentSpan {
    isWriteAccess(): any;
    isInString(): any;
}
export function ReferenceFindableNode(Base: any): {
    new (): {
        [x: string]: any;
        findReferences(): any;
        findReferencesAsNodes(): any;
    };
    [x: string]: any;
};
export class ReferencedSymbol {
    constructor(context: any, compilerObject: any);
    _context: any;
    _compilerObject: any;
    _references: any;
    get compilerObject(): any;
    getDefinition(): any;
    getReferences(): any;
}
export class ReferencedSymbolDefinitionInfo extends DefinitionInfo {
    getDisplayParts(): any;
}
export class ReferencedSymbolEntry extends ReferenceEntry {
    isDefinition(): any;
}
export class RegularExpressionLiteral extends LiteralExpression {
    getLiteralValue(): RegExp;
    setLiteralValue(regExpOrPattern: any, flags: any): RegularExpressionLiteral;
}
export const RegularExpressionLiteralBase: typeof LiteralExpression;
export class RenameLocation extends DocumentSpan {
    getPrefixText(): any;
    getSuffixText(): any;
}
export function RenameableNode(Base: any): {
    new (): {
        [x: string]: any;
        rename(newName: any, options: any): any;
    };
    [x: string]: any;
};
declare const ReturnStatement_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionOrThrow(message: any): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
    };
    [x: string]: any;
};
export class ReturnStatement extends ReturnStatement_base {
}
export const ReturnStatementBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionOrThrow(message: any): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
    };
    [x: string]: any;
};
export function ReturnTypedNode(Base: any): {
    new (): {
        [x: string]: any;
        getReturnType(): any;
        getReturnTypeNode(): any;
        getReturnTypeNodeOrThrow(message: any): any;
        setReturnType(textOrWriterFunction: any): any;
        removeReturnType(): any;
        getSignature(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const SatisfiesExpression_base: {
    new (): {
        [x: string]: any;
        getTypeNode(): any;
        getTypeNodeOrThrow(message: any): any;
        setType(textOrWriterFunction: any): any;
        set(structure: any): any;
        removeType(): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class SatisfiesExpression extends SatisfiesExpression_base {
}
export const SatisfiesExpressionBase: {
    new (): {
        [x: string]: any;
        getTypeNode(): any;
        getTypeNodeOrThrow(message: any): any;
        setType(textOrWriterFunction: any): any;
        set(structure: any): any;
        removeType(): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export var Scope: any;
export function ScopeableNode(Base: any): {
    new (): {
        [x: string]: any;
        getScope(): any;
        setScope(scope: any): any;
        getScopeKeyword(): any;
        hasScopeKeyword(): boolean;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export function ScopedNode(Base: any): {
    new (): {
        [x: string]: any;
        getScope(): any;
        setScope(scope: any): any;
        hasScopeKeyword(): boolean;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const SetAccessorDeclaration_base: {
    new (): {
        [x: string]: any;
        setOrder(order: any): any;
    };
    [x: string]: any;
};
export class SetAccessorDeclaration extends SetAccessorDeclaration_base {
    set(structure: any): SetAccessorDeclaration;
    getGetAccessor(): any;
    getGetAccessorOrThrow(message: any): any;
    getStructure(): any;
}
export const SetAccessorDeclarationBase: {
    new (): {
        [x: string]: any;
        setOrder(order: any): any;
    };
    [x: string]: any;
};
declare const ShorthandPropertyAssignment_base: {
    new (): {
        [x: string]: any;
        hasInitializer(): boolean;
        getInitializerIfKindOrThrow(kind: any, message: any): any;
        getInitializerIfKind(kind: any): any;
        getInitializerOrThrow(message: any): any;
        getInitializer(): any;
    };
    [x: string]: any;
};
export class ShorthandPropertyAssignment extends ShorthandPropertyAssignment_base {
    hasObjectAssignmentInitializer(): boolean;
    getObjectAssignmentInitializerOrThrow(message: any): any;
    getObjectAssignmentInitializer(): any;
    getEqualsTokenOrThrow(message: any): any;
    getEqualsToken(): any;
    removeObjectAssignmentInitializer(): ShorthandPropertyAssignment;
    setInitializer(text: any): any;
    set(structure: any): ShorthandPropertyAssignment;
    getStructure(): any;
}
export const ShorthandPropertyAssignmentBase: {
    new (): {
        [x: string]: any;
        hasInitializer(): boolean;
        getInitializerIfKindOrThrow(kind: any, message: any): any;
        getInitializerIfKind(kind: any): any;
        getInitializerOrThrow(message: any): any;
        getInitializer(): any;
    };
    [x: string]: any;
};
export class Signature {
    constructor(context: any, signature: any);
    _context: any;
    _compilerSignature: any;
    get compilerSignature(): any;
    getTypeParameters(): any;
    getParameters(): any;
    getReturnType(): any;
    getDocumentationComments(): any;
    getJsDocTags(): any;
    getDeclaration(): any;
}
export function SignaturedDeclaration(Base: any): {
    new (): {
        [x: string]: any;
        getReturnType(): any;
        getReturnTypeNode(): any;
        getReturnTypeNodeOrThrow(message: any): any;
        setReturnType(textOrWriterFunction: any): any;
        removeReturnType(): any;
        getSignature(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const SourceFile_base: {
    new (): {
        [x: string]: any;
        addImportDeclaration(structure: any): any;
        addImportDeclarations(structures: any): any;
        insertImportDeclaration(index: any, structure: any): any;
        insertImportDeclarations(index: any, structures: any): any;
        getImportDeclaration(conditionOrModuleSpecifier: any): any;
        getImportDeclarationOrThrow(conditionOrModuleSpecifier: any, message: any): any;
        getImportDeclarations(): any;
        addExportDeclaration(structure: any): any;
        addExportDeclarations(structures: any): any;
        insertExportDeclaration(index: any, structure: any): any;
        insertExportDeclarations(index: any, structures: any): any;
        getExportDeclaration(conditionOrModuleSpecifier: any): any;
        getExportDeclarationOrThrow(conditionOrModuleSpecifier: any, message: any): any;
        getExportDeclarations(): any;
        addExportAssignment(structure: any): any;
        addExportAssignments(structures: any): any;
        insertExportAssignment(index: any, structure: any): any;
        insertExportAssignments(index: any, structures: any): any;
        getExportAssignment(condition: any): any;
        getExportAssignmentOrThrow(condition: any, message: any): any;
        getExportAssignments(): any;
        getDefaultExportSymbol(): any;
        getDefaultExportSymbolOrThrow(message: any): any;
        getExportSymbols(): any;
        getExportedDeclarations(): Map<any, any>;
        removeDefaultExport(defaultExportSymbol: any): any;
    };
    [x: string]: any;
};
export class SourceFile extends SourceFile_base {
    constructor(context: any, node: any);
    _isSaved: boolean;
    _modifiedEventContainer: EventContainer<undefined>;
    _preModifiedEventContainer: EventContainer<undefined>;
    _referenceContainer: SourceFileReferenceContainer;
    __sourceFile: SourceFile;
    _replaceCompilerNodeFromFactory(compilerNode: any): void;
    _clearInternals(): void;
    getFilePath(): any;
    getBaseName(): string;
    getBaseNameWithoutExtension(): string;
    getExtension(): string;
    getDirectory(): any;
    getDirectoryPath(): any;
    getFullText(): any;
    getLineAndColumnAtPos(pos: any): {
        line: number;
        column: number;
    };
    getLengthFromLineStartAtPos(pos: any): number;
    copyToDirectory(dirPathOrDirectory: any, options: any): any;
    copy(filePath: any, options?: {}): any;
    _copyInternal(fileAbsoluteOrRelativePath: any, options?: {}): any;
    _getReferencesForCopyInternal(): [any, any][];
    _updateReferencesForCopyInternal(literalReferences: any): void;
    copyImmediately(filePath: any, options: any): Promise<any>;
    copyImmediatelySync(filePath: any, options: any): any;
    moveToDirectory(dirPathOrDirectory: any, options: any): SourceFile;
    move(filePath: any, options?: {}): SourceFile;
    _moveInternal(fileRelativeOrAbsolutePath: any, options?: {}): boolean;
    _getReferencesForMoveInternal(): {
        literalReferences: [any, any][];
        referencingLiterals: any[];
    };
    _updateReferencesForMoveInternal(sourceFileReferences: any, oldDirPath: any): void;
    moveImmediately(filePath: any, options: any): Promise<SourceFile>;
    moveImmediatelySync(filePath: any, options: any): SourceFile;
    delete(): void;
    deleteImmediately(): Promise<void>;
    deleteImmediatelySync(): void;
    save(): Promise<void>;
    saveSync(): void;
    _getTextForSave(): any;
    getPathReferenceDirectives(): any;
    _referencedFiles: any;
    getTypeReferenceDirectives(): any;
    _typeReferenceDirectives: any;
    getLibReferenceDirectives(): any;
    _libReferenceDirectives: any;
    getReferencingSourceFiles(): any[];
    getReferencingNodesInOtherSourceFiles(): any[];
    getReferencingLiteralsInOtherSourceFiles(): any[];
    getReferencedSourceFiles(): any[];
    getNodesReferencingOtherSourceFiles(): any[];
    getLiteralsReferencingOtherSourceFiles(): any[];
    getImportStringLiterals(): any;
    getLanguageVersion(): any;
    getLanguageVariant(): any;
    getScriptKind(): any;
    isDeclarationFile(): any;
    isFromExternalLibrary(): any;
    isInNodeModules(): boolean;
    isSaved(): boolean;
    _setIsSaved(value: any): void;
    getPreEmitDiagnostics(): any;
    unindent(positionRangeOrPos: any, times?: number): SourceFile;
    indent(positionRangeOrPos: any, times?: number): SourceFile;
    emit(options: any): any;
    emitSync(options: any): any;
    getEmitOutput(options?: {}): any;
    formatText(settings?: {}): void;
    refreshFromFileSystem(): Promise<any>;
    refreshFromFileSystemSync(): any;
    getRelativePathTo(sourceFileDirOrPath: any): any;
    getRelativePathAsModuleSpecifierTo(sourceFileDirOrFilePath: any): any;
    onModified(subscription: any, subscribe?: boolean): SourceFile;
    _doActionPreNextModification(action: any): SourceFile;
    _firePreModified(): void;
    organizeImports(formatSettings?: {}, userPreferences?: {}): SourceFile;
    fixUnusedIdentifiers(formatSettings?: {}, userPreferences?: {}): SourceFile;
    fixMissingImports(formatSettings?: {}, userPreferences?: {}): SourceFile;
    applyTextChanges(textChanges: any): SourceFile;
    set(structure: any): SourceFile;
    getStructure(): any;
    _refreshFromFileSystemInternal(fileReadResult: any): any;
    _isLibFileInMemory(): any;
    _throwIfIsInMemoryLibFile(): void;
    _isInProject(): any;
    _markAsInProject(): void;
}
export const SourceFileBase: {
    new (): {
        [x: string]: any;
        addImportDeclaration(structure: any): any;
        addImportDeclarations(structures: any): any;
        insertImportDeclaration(index: any, structure: any): any;
        insertImportDeclarations(index: any, structures: any): any;
        getImportDeclaration(conditionOrModuleSpecifier: any): any;
        getImportDeclarationOrThrow(conditionOrModuleSpecifier: any, message: any): any;
        getImportDeclarations(): any;
        addExportDeclaration(structure: any): any;
        addExportDeclarations(structures: any): any;
        insertExportDeclaration(index: any, structure: any): any;
        insertExportDeclarations(index: any, structures: any): any;
        getExportDeclaration(conditionOrModuleSpecifier: any): any;
        getExportDeclarationOrThrow(conditionOrModuleSpecifier: any, message: any): any;
        getExportDeclarations(): any;
        addExportAssignment(structure: any): any;
        addExportAssignments(structures: any): any;
        insertExportAssignment(index: any, structure: any): any;
        insertExportAssignments(index: any, structures: any): any;
        getExportAssignment(condition: any): any;
        getExportAssignmentOrThrow(condition: any, message: any): any;
        getExportAssignments(): any;
        getDefaultExportSymbol(): any;
        getDefaultExportSymbolOrThrow(message: any): any;
        getExportSymbols(): any;
        getExportedDeclarations(): Map<any, any>;
        removeDefaultExport(defaultExportSymbol: any): any;
    };
    [x: string]: any;
};
declare const SpreadAssignment_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class SpreadAssignment extends SpreadAssignment_base {
    set(structure: any): SpreadAssignment;
    getStructure(): any;
}
export const SpreadAssignmentBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
declare const SpreadElement_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class SpreadElement extends SpreadElement_base {
}
export const SpreadElementBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
declare const Statement_base: {
    new (): {
        [x: string]: any;
        setOrder(order: any): any;
    };
    [x: string]: any;
};
export class Statement extends Statement_base {
    remove(): void;
}
export const StatementBase: {
    new (): {
        [x: string]: any;
        setOrder(order: any): any;
    };
    [x: string]: any;
};
export function StatementedNode(Base: any): {
    new (): {
        [x: string]: any;
        getStatements(): any;
        getStatementsWithComments(): any;
        getStatement(findFunction: any): any;
        getStatementOrThrow(findFunction: any, message: any): any;
        getStatementByKind(kind: any): any;
        getStatementByKindOrThrow(kind: any, message: any): any;
        addStatements(textOrWriterFunction: any): any;
        insertStatements(index: any, statements: any): any;
        removeStatement(index: any): any;
        removeStatements(indexRange: any): any;
        addClass(structure: any): any;
        addClasses(structures: any): any[];
        insertClass(index: any, structure: any): any;
        insertClasses(index: any, structures: any): any[];
        getClasses(): any;
        getClass(nameOrFindFunction: any): any;
        getClassOrThrow(nameOrFindFunction: any): any;
        addEnum(structure: any): any;
        addEnums(structures: any): any[];
        insertEnum(index: any, structure: any): any;
        insertEnums(index: any, structures: any): any[];
        getEnums(): any;
        getEnum(nameOrFindFunction: any): any;
        getEnumOrThrow(nameOrFindFunction: any): any;
        addFunction(structure: any): any;
        addFunctions(structures: any): any[];
        insertFunction(index: any, structure: any): any;
        insertFunctions(index: any, structures: any): any[];
        getFunctions(): any;
        getFunction(nameOrFindFunction: any): any;
        getFunctionOrThrow(nameOrFindFunction: any): any;
        addInterface(structure: any): any;
        addInterfaces(structures: any): any[];
        insertInterface(index: any, structure: any): any;
        insertInterfaces(index: any, structures: any): any[];
        getInterfaces(): any;
        getInterface(nameOrFindFunction: any): any;
        getInterfaceOrThrow(nameOrFindFunction: any): any;
        addModule(structure: any): any;
        addModules(structures: any): any[];
        insertModule(index: any, structure: any): any;
        insertModules(index: any, structures: any): any[];
        getModules(): any;
        getModule(nameOrFindFunction: any): any;
        getModuleOrThrow(nameOrFindFunction: any): any;
        addTypeAlias(structure: any): any;
        addTypeAliases(structures: any): any[];
        insertTypeAlias(index: any, structure: any): any;
        insertTypeAliases(index: any, structures: any): any[];
        getTypeAliases(): any;
        getTypeAlias(nameOrFindFunction: any): any;
        getTypeAliasOrThrow(nameOrFindFunction: any): any;
        getVariableStatements(): any;
        getVariableStatement(nameOrFindFunction: any): any;
        getVariableStatementOrThrow(nameOrFindFunction: any, message: any): any;
        addVariableStatement(structure: any): any;
        addVariableStatements(structures: any): any[];
        insertVariableStatement(index: any, structure: any): any;
        insertVariableStatements(index: any, structures: any): any[];
        getVariableDeclarations(): any[];
        getVariableDeclaration(nameOrFindFunction: any): any;
        getVariableDeclarationOrThrow(nameOrFindFunction: any): any;
        getStructure(): any;
        set(structure: any): any;
        _getCompilerStatementsWithComments(): any;
        _getCompilerStatementsContainer(): any;
        _insertChildren(opts: any): any[];
        _standardWrite(writer: any, info: any, writeStructures: any, opts?: {}): void;
    };
    [x: string]: any;
};
export function StaticableNode(Base: any): {
    new (): {
        [x: string]: any;
        isStatic(): any;
        getStaticKeyword(): any;
        getStaticKeywordOrThrow(message: any): any;
        setIsStatic(value: any): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class StringLiteral extends LiteralExpression {
    getLiteralValue(): any;
    setLiteralValue(value: any): StringLiteral;
    getQuoteKind(): any;
}
export const StringLiteralBase: typeof LiteralExpression;
export namespace Structure {
    function hasName(structure: any): boolean;
    function isAssertEntry(structure: any): boolean;
    function isAssertionKeyNamed(structure: any): boolean;
    function isCallSignature(structure: any): boolean;
    function isJSDocable(structure: any): boolean;
    function isSignatured(structure: any): boolean;
    function isParametered(structure: any): boolean;
    function isReturnTyped(structure: any): boolean;
    function isTypeParametered(structure: any): boolean;
    function isClass(structure: any): boolean;
    function isClassLikeDeclarationBase(structure: any): boolean;
    function isNameable(structure: any): boolean;
    function isImplementsClauseable(structure: any): boolean;
    function isDecoratable(structure: any): boolean;
    function isAbstractable(structure: any): boolean;
    function isAmbientable(structure: any): boolean;
    function isExportable(structure: any): boolean;
    function isClassStaticBlock(structure: any): boolean;
    function isStatemented(structure: any): boolean;
    function isConstructorDeclarationOverload(structure: any): boolean;
    function isScoped(structure: any): boolean;
    function isConstructor(structure: any): boolean;
    function isFunctionLike(structure: any): boolean;
    function isConstructSignature(structure: any): boolean;
    function isDecorator(structure: any): boolean;
    function isEnum(structure: any): boolean;
    function isNamed(structure: any): boolean;
    function isEnumMember(structure: any): boolean;
    function isPropertyNamed(structure: any): boolean;
    function isInitializerExpressionable(structure: any): boolean;
    function isExportAssignment(structure: any): boolean;
    function isExportDeclaration(structure: any): boolean;
    function isExportSpecifier(structure: any): boolean;
    function isFunctionDeclarationOverload(structure: any): boolean;
    function isAsyncable(structure: any): boolean;
    function isGeneratorable(structure: any): boolean;
    function isFunction(structure: any): boolean;
    function isGetAccessor(structure: any): boolean;
    function isStaticable(structure: any): boolean;
    function isImportDeclaration(structure: any): boolean;
    function isImportSpecifier(structure: any): boolean;
    function isIndexSignature(structure: any): boolean;
    function isReadonlyable(structure: any): boolean;
    function isInterface(structure: any): boolean;
    function isExtendsClauseable(structure: any): boolean;
    function isTypeElementMembered(structure: any): boolean;
    function isJSDoc(structure: any): boolean;
    function isJSDocTag(structure: any): boolean;
    function isJsxAttribute(structure: any): boolean;
    function isJsxElement(structure: any): boolean;
    function isJsxSelfClosingElement(structure: any): boolean;
    function isJsxTagNamed(structure: any): boolean;
    function isJsxAttributed(structure: any): boolean;
    function isJsxSpreadAttribute(structure: any): boolean;
    function isMethodDeclarationOverload(structure: any): boolean;
    function isQuestionTokenable(structure: any): boolean;
    function isOverrideable(structure: any): boolean;
    function isMethod(structure: any): boolean;
    function isMethodSignature(structure: any): boolean;
    function isModule(structure: any): boolean;
    function isModuleNamed(structure: any): boolean;
    function isParameter(structure: any): boolean;
    function isBindingNamed(structure: any): boolean;
    function isTyped(structure: any): boolean;
    function isScopeable(structure: any): boolean;
    function isPropertyAssignment(structure: any): boolean;
    function isProperty(structure: any): boolean;
    function isExclamationTokenable(structure: any): boolean;
    function isPropertySignature(structure: any): boolean;
    function isSetAccessor(structure: any): boolean;
    function isShorthandPropertyAssignment(structure: any): boolean;
    function isSourceFile(structure: any): boolean;
    function isSpreadAssignment(structure: any): boolean;
    function isExpressioned(structure: any): boolean;
    function isTypeAlias(structure: any): boolean;
    function isTypeParameter(structure: any): boolean;
    function isVariableDeclaration(structure: any): boolean;
    function isVariableStatement(structure: any): boolean;
}
export var StructureKind: any;
declare const SuperElementAccessExpression_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class SuperElementAccessExpression extends SuperElementAccessExpression_base {
}
export const SuperElementAccessExpressionBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class SuperExpression extends PrimaryExpression {
}
export const SuperExpressionBase: typeof PrimaryExpression;
export function SuperExpressionedNode(Base: any): {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
declare const SuperPropertyAccessExpression_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class SuperPropertyAccessExpression extends SuperPropertyAccessExpression_base {
}
export const SuperPropertyAccessExpressionBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
declare const SwitchStatement_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class SwitchStatement extends SwitchStatement_base {
    getCaseBlock(): any;
    getClauses(): any;
    removeClause(index: any): any;
    removeClauses(indexRange: any): any;
}
export const SwitchStatementBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class Symbol {
    constructor(context: any, symbol: any);
    get compilerSymbol(): any;
    _context: any;
    _compilerSymbol: any;
    getName(): any;
    getEscapedName(): any;
    getAliasedSymbolOrThrow(message: any): any;
    getImmediatelyAliasedSymbol(): any;
    getImmediatelyAliasedSymbolOrThrow(message: any): any;
    getAliasedSymbol(): any;
    getExportSymbol(): any;
    isAlias(): boolean;
    isOptional(): boolean;
    getFlags(): any;
    hasFlags(flags: any): boolean;
    getValueDeclarationOrThrow(message: any): any;
    getValueDeclaration(): any;
    getDeclarations(): any;
    getExportOrThrow(name: any, message: any): any;
    getExport(name: any): any;
    getExports(): any[];
    getGlobalExportOrThrow(name: any, message: any): any;
    getGlobalExport(name: any): any;
    getGlobalExports(): any[];
    getMemberOrThrow(name: any, message: any): any;
    getMember(name: any): any;
    getMembers(): any[];
    getDeclaredType(): any;
    getTypeAtLocation(node: any): any;
    getFullyQualifiedName(): any;
    getJsDocTags(): any;
}
export class SymbolDisplayPart {
    constructor(compilerObject: any);
    _compilerObject: any;
    get compilerObject(): any;
    getText(): any;
    getKind(): any;
}
export class SyntaxList extends Node {
    addChildText(textOrWriterFunction: any): any[];
    insertChildText(index: any, textOrWriterFunction: any): any[];
}
export class TaggedTemplateExpression extends MemberExpression {
    getTag(): any;
    getTemplate(): any;
    removeTag(): any;
}
export class TemplateExpression extends PrimaryExpression {
    getHead(): any;
    getTemplateSpans(): any;
    setLiteralValue(value: any): any;
}
export const TemplateExpressionBase: typeof PrimaryExpression;
declare const TemplateHead_base: {
    new (): {
        [x: string]: any;
        getLiteralText(): any;
        isTerminated(): boolean;
        hasExtendedUnicodeEscape(): any;
    };
    [x: string]: any;
};
export class TemplateHead extends TemplateHead_base {
}
export const TemplateHeadBase: {
    new (): {
        [x: string]: any;
        getLiteralText(): any;
        isTerminated(): boolean;
        hasExtendedUnicodeEscape(): any;
    };
    [x: string]: any;
};
export class TemplateLiteralTypeNode extends TypeNode {
    getHead(): any;
    getTemplateSpans(): any;
    setLiteralValue(value: any): any;
}
declare const TemplateMiddle_base: {
    new (): {
        [x: string]: any;
        getLiteralText(): any;
        isTerminated(): boolean;
        hasExtendedUnicodeEscape(): any;
    };
    [x: string]: any;
};
export class TemplateMiddle extends TemplateMiddle_base {
}
export const TemplateMiddleBase: {
    new (): {
        [x: string]: any;
        getLiteralText(): any;
        isTerminated(): boolean;
        hasExtendedUnicodeEscape(): any;
    };
    [x: string]: any;
};
declare const TemplateSpan_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class TemplateSpan extends TemplateSpan_base {
    getLiteral(): any;
}
export const TemplateSpanBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
declare const TemplateTail_base: {
    new (): {
        [x: string]: any;
        getLiteralText(): any;
        isTerminated(): boolean;
        hasExtendedUnicodeEscape(): any;
    };
    [x: string]: any;
};
export class TemplateTail extends TemplateTail_base {
}
export const TemplateTailBase: {
    new (): {
        [x: string]: any;
        getLiteralText(): any;
        isTerminated(): boolean;
        hasExtendedUnicodeEscape(): any;
    };
    [x: string]: any;
};
export class TextChange {
    constructor(compilerObject: any);
    _compilerObject: any;
    get compilerObject(): any;
    getSpan(): TextSpan;
    getNewText(): any;
}
export function TextInsertableNode(Base: any): {
    new (): {
        [x: string]: any;
        insertText(pos: any, textOrWriterFunction: any): any;
        removeText(pos: any, end: any): any;
        replaceText(range: any, textOrWriterFunction: any): any;
    };
    [x: string]: any;
};
export class TextRange {
    constructor(compilerObject: any, sourceFile: any);
    _compilerObject: any;
    _sourceFile: any;
    get compilerObject(): any;
    getSourceFile(): any;
    getPos(): any;
    getEnd(): any;
    getWidth(): number;
    getText(): any;
    _forget(): void;
    wasForgotten(): boolean;
    _throwIfForgotten(): void;
}
export class TextSpan {
    constructor(compilerObject: any);
    _compilerObject: any;
    get compilerObject(): any;
    getStart(): any;
    getEnd(): any;
    getLength(): any;
}
export class ThisExpression extends PrimaryExpression {
}
export const ThisExpressionBase: typeof PrimaryExpression;
export class ThisTypeNode extends TypeNode {
}
declare const ThrowStatement_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class ThrowStatement extends ThrowStatement_base {
}
export const ThrowStatementBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class TrueLiteral extends PrimaryExpression {
    getLiteralValue(): boolean;
    setLiteralValue(value: any): any;
}
export const TrueLiteralBase: typeof PrimaryExpression;
export class TryStatement extends Statement {
    getTryBlock(): any;
    getCatchClause(): any;
    getCatchClauseOrThrow(message: any): any;
    getFinallyBlock(): any;
    getFinallyBlockOrThrow(message: any): any;
}
export const TryStatementBase: typeof Statement;
export class TupleTypeNode extends TypeNode {
    getElements(): any;
}
export class Type {
    constructor(context: any, type: any);
    get compilerType(): any;
    _context: any;
    _compilerType: any;
    getText(enclosingNode: any, typeFormatFlags: any): any;
    getAliasSymbol(): any;
    getAliasSymbolOrThrow(message: any): any;
    getAliasTypeArguments(): any;
    getApparentType(): any;
    getArrayElementTypeOrThrow(message: any): any;
    getArrayElementType(): any;
    getBaseTypes(): any;
    getBaseTypeOfLiteralType(): any;
    getCallSignatures(): any;
    getConstructSignatures(): any;
    getConstraintOrThrow(message: any): any;
    getConstraint(): any;
    getDefaultOrThrow(message: any): any;
    getDefault(): any;
    getProperties(): any;
    getPropertyOrThrow(nameOrFindFunction: any): any;
    getProperty(nameOrFindFunction: any): any;
    getApparentProperties(): any;
    getApparentProperty(nameOrFindFunction: any): any;
    isNullable(): any;
    getNonNullableType(): any;
    getNumberIndexType(): any;
    getStringIndexType(): any;
    getTargetType(): any;
    getTargetTypeOrThrow(message: any): any;
    getTypeArguments(): any;
    getTupleElements(): any;
    getUnionTypes(): any;
    getIntersectionTypes(): any;
    getLiteralValue(): any;
    getLiteralValueOrThrow(message: any): any;
    getLiteralFreshType(): any;
    getLiteralFreshTypeOrThrow(message: any): any;
    getLiteralRegularType(): any;
    getLiteralRegularTypeOrThrow(message: any): any;
    getSymbol(): any;
    getSymbolOrThrow(message: any): any;
    isAnonymous(): boolean;
    isAny(): boolean;
    isNever(): boolean;
    isArray(): boolean;
    isReadonlyArray(): boolean;
    isTemplateLiteral(): boolean;
    isBoolean(): boolean;
    isString(): boolean;
    isNumber(): boolean;
    isLiteral(): any;
    isBooleanLiteral(): boolean;
    isEnumLiteral(): boolean;
    isNumberLiteral(): boolean;
    isStringLiteral(): any;
    isClass(): any;
    isClassOrInterface(): any;
    isEnum(): boolean;
    isInterface(): boolean;
    isObject(): boolean;
    isTypeParameter(): any;
    isTuple(): any;
    isUnion(): any;
    isIntersection(): any;
    isUnionOrIntersection(): any;
    isUnknown(): boolean;
    isNull(): boolean;
    isUndefined(): boolean;
    getFlags(): any;
    getObjectFlags(): any;
    _hasTypeFlag(flag: any): boolean;
    _hasObjectFlag(flag: any): boolean;
}
declare const TypeAliasDeclaration_base: {
    new (): {
        [x: string]: any;
        getTypeParameter(nameOrFindFunction: any): any;
        getTypeParameterOrThrow(nameOrFindFunction: any): any;
        getTypeParameters(): any;
        addTypeParameter(structure: any): any;
        addTypeParameters(structures: any): any[];
        insertTypeParameter(index: any, structure: any): any;
        insertTypeParameters(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class TypeAliasDeclaration extends TypeAliasDeclaration_base {
}
export const TypeAliasDeclarationBase: {
    new (): {
        [x: string]: any;
        getTypeParameter(nameOrFindFunction: any): any;
        getTypeParameterOrThrow(nameOrFindFunction: any): any;
        getTypeParameters(): any;
        addTypeParameter(structure: any): any;
        addTypeParameters(structures: any): any[];
        insertTypeParameter(index: any, structure: any): any;
        insertTypeParameters(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export function TypeArgumentedNode(Base: any): {
    new (): {
        [x: string]: any;
        getTypeArguments(): any;
        addTypeArgument(argumentText: any): any;
        addTypeArguments(argumentTexts: any): any[];
        insertTypeArgument(index: any, argumentText: any): any;
        insertTypeArguments(index: any, argumentTexts: any): any[];
        removeTypeArgument(typeArgOrIndex: any): any;
    };
    [x: string]: any;
};
declare const TypeAssertion_base: {
    new (): {
        [x: string]: any;
        getTypeNode(): any;
        getTypeNodeOrThrow(message: any): any;
        setType(textOrWriterFunction: any): any;
        set(structure: any): any;
        removeType(): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class TypeAssertion extends TypeAssertion_base {
}
export const TypeAssertionBase: {
    new (): {
        [x: string]: any;
        getTypeNode(): any;
        getTypeNodeOrThrow(message: any): any;
        setType(textOrWriterFunction: any): any;
        set(structure: any): any;
        removeType(): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class TypeChecker {
    constructor(context: any);
    _context: any;
    get compilerObject(): any;
    _reset(getTypeChecker: any): void;
    _getCompilerObject: any;
    getAmbientModules(): any;
    getApparentType(type: any): any;
    getConstantValue(node: any): any;
    getFullyQualifiedName(symbol: any): any;
    getTypeAtLocation(node: any): any;
    getContextualType(expression: any): any;
    getTypeOfSymbolAtLocation(symbol: any, node: any): any;
    getDeclaredTypeOfSymbol(symbol: any): any;
    getSymbolAtLocation(node: any): any;
    getAliasedSymbol(symbol: any): any;
    getImmediatelyAliasedSymbol(symbol: any): any;
    getExportSymbolOfSymbol(symbol: any): any;
    getPropertiesOfType(type: any): any;
    getTypeText(type: any, enclosingNode: any, typeFormatFlags: any): any;
    getReturnTypeOfSignature(signature: any): any;
    getSignatureFromNode(node: any): any;
    getExportsOfModule(moduleSymbol: any): any;
    getExportSpecifierLocalTargetSymbol(exportSpecifier: any): any;
    getResolvedSignature(node: any): any;
    getResolvedSignatureOrThrow(node: any, message: any): any;
    getBaseTypeOfLiteralType(type: any): any;
    getSymbolsInScope(node: any, meaning: any): any;
    getTypeArguments(typeReference: any): any;
    _getDefaultTypeFormatFlags(enclosingNode: any): number;
}
export class TypeElement extends Node {
    remove(): void;
}
export function TypeElementMemberedNode(Base: any): {
    new (): {
        [x: string]: any;
        addMember(member: any): any;
        addMembers(members: any): any[];
        insertMember(index: any, member: any): any;
        insertMembers(index: any, members: any): any[];
        addConstructSignature(structure: any): any;
        addConstructSignatures(structures: any): any[];
        insertConstructSignature(index: any, structure: any): any;
        insertConstructSignatures(index: any, structures: any): any[];
        getConstructSignature(findFunction: any): any;
        getConstructSignatureOrThrow(findFunction: any, message: any): any;
        getConstructSignatures(): any;
        addCallSignature(structure: any): any;
        addCallSignatures(structures: any): any[];
        insertCallSignature(index: any, structure: any): any;
        insertCallSignatures(index: any, structures: any): any[];
        getCallSignature(findFunction: any): any;
        getCallSignatureOrThrow(findFunction: any, message: any): any;
        getCallSignatures(): any;
        addIndexSignature(structure: any): any;
        addIndexSignatures(structures: any): any[];
        insertIndexSignature(index: any, structure: any): any;
        insertIndexSignatures(index: any, structures: any): any[];
        getIndexSignature(findFunction: any): any;
        getIndexSignatureOrThrow(findFunction: any, message: any): any;
        getIndexSignatures(): any;
        addMethod(structure: any): any;
        addMethods(structures: any): any[];
        insertMethod(index: any, structure: any): any;
        insertMethods(index: any, structures: any): any[];
        getMethod(nameOrFindFunction: any): any;
        getMethodOrThrow(nameOrFindFunction: any): any;
        getMethods(): any;
        addProperty(structure: any): any;
        addProperties(structures: any): any[];
        insertProperty(index: any, structure: any): any;
        insertProperties(index: any, structures: any): any[];
        getProperty(nameOrFindFunction: any): any;
        getPropertyOrThrow(nameOrFindFunction: any): any;
        getProperties(): any;
        getMembers(): any;
        getMembersWithComments(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
declare const TypeLiteralNode_base: {
    new (): {
        [x: string]: any;
        addMember(member: any): any;
        addMembers(members: any): any[];
        insertMember(index: any, member: any): any;
        insertMembers(index: any, members: any): any[];
        addConstructSignature(structure: any): any;
        addConstructSignatures(structures: any): any[];
        insertConstructSignature(index: any, structure: any): any;
        insertConstructSignatures(index: any, structures: any): any[];
        getConstructSignature(findFunction: any): any;
        getConstructSignatureOrThrow(findFunction: any, message: any): any;
        getConstructSignatures(): any;
        addCallSignature(structure: any): any;
        addCallSignatures(structures: any): any[];
        insertCallSignature(index: any, structure: any): any;
        insertCallSignatures(index: any, structures: any): any[];
        getCallSignature(findFunction: any): any;
        getCallSignatureOrThrow(findFunction: any, message: any): any;
        getCallSignatures(): any;
        addIndexSignature(structure: any): any;
        addIndexSignatures(structures: any): any[];
        insertIndexSignature(index: any, structure: any): any;
        insertIndexSignatures(index: any, structures: any): any[];
        getIndexSignature(findFunction: any): any;
        getIndexSignatureOrThrow(findFunction: any, message: any): any;
        getIndexSignatures(): any;
        addMethod(structure: any): any;
        addMethods(structures: any): any[];
        insertMethod(index: any, structure: any): any;
        insertMethods(index: any, structures: any): any[];
        getMethod(nameOrFindFunction: any): any;
        getMethodOrThrow(nameOrFindFunction: any): any;
        getMethods(): any;
        addProperty(structure: any): any;
        addProperties(structures: any): any[];
        insertProperty(index: any, structure: any): any;
        insertProperties(index: any, structures: any): any[];
        getProperty(nameOrFindFunction: any): any;
        getPropertyOrThrow(nameOrFindFunction: any): any;
        getProperties(): any;
        getMembers(): any;
        getMembersWithComments(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class TypeLiteralNode extends TypeLiteralNode_base {
}
export const TypeLiteralNodeBase: {
    new (): {
        [x: string]: any;
        addMember(member: any): any;
        addMembers(members: any): any[];
        insertMember(index: any, member: any): any;
        insertMembers(index: any, members: any): any[];
        addConstructSignature(structure: any): any;
        addConstructSignatures(structures: any): any[];
        insertConstructSignature(index: any, structure: any): any;
        insertConstructSignatures(index: any, structures: any): any[];
        getConstructSignature(findFunction: any): any;
        getConstructSignatureOrThrow(findFunction: any, message: any): any;
        getConstructSignatures(): any;
        addCallSignature(structure: any): any;
        addCallSignatures(structures: any): any[];
        insertCallSignature(index: any, structure: any): any;
        insertCallSignatures(index: any, structures: any): any[];
        getCallSignature(findFunction: any): any;
        getCallSignatureOrThrow(findFunction: any, message: any): any;
        getCallSignatures(): any;
        addIndexSignature(structure: any): any;
        addIndexSignatures(structures: any): any[];
        insertIndexSignature(index: any, structure: any): any;
        insertIndexSignatures(index: any, structures: any): any[];
        getIndexSignature(findFunction: any): any;
        getIndexSignatureOrThrow(findFunction: any, message: any): any;
        getIndexSignatures(): any;
        addMethod(structure: any): any;
        addMethods(structures: any): any[];
        insertMethod(index: any, structure: any): any;
        insertMethods(index: any, structures: any): any[];
        getMethod(nameOrFindFunction: any): any;
        getMethodOrThrow(nameOrFindFunction: any): any;
        getMethods(): any;
        addProperty(structure: any): any;
        addProperties(structures: any): any[];
        insertProperty(index: any, structure: any): any;
        insertProperties(index: any, structures: any): any[];
        getProperty(nameOrFindFunction: any): any;
        getPropertyOrThrow(nameOrFindFunction: any): any;
        getProperties(): any;
        getMembers(): any;
        getMembersWithComments(): any;
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class TypeNode extends Node {
}
declare const TypeOfExpression_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class TypeOfExpression extends TypeOfExpression_base {
}
export const TypeOfExpressionBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class TypeOperatorTypeNode extends TypeNode {
    getOperator(): any;
    getTypeNode(): any;
}
export class TypeParameter extends Type {
    _getTypeParameterDeclaration(): any;
}
declare const TypeParameterDeclaration_base: {
    new (): {
        [x: string]: any;
        getModifiers(): any;
        getFirstModifierByKindOrThrow(kind: any, message: any): any;
        getFirstModifierByKind(kind: any): any;
        hasModifier(textOrKind: any): any;
        toggleModifier(text: any, value: any): any;
        addModifier(text: any): any;
        removeModifier(text: any): boolean;
        getCompilerModifiers(): any;
    };
    [x: string]: any;
};
export class TypeParameterDeclaration extends TypeParameterDeclaration_base {
    getConstraint(): any;
    getConstraintOrThrow(message: any): any;
    setConstraint(text: any): TypeParameterDeclaration;
    removeConstraint(): TypeParameterDeclaration;
    getDefault(): any;
    getDefaultOrThrow(message: any): any;
    setDefault(text: any): TypeParameterDeclaration;
    removeDefault(): TypeParameterDeclaration;
    setVariance(variance: any): TypeParameterDeclaration;
    getVariance(): any;
    remove(): void;
    set(structure: any): TypeParameterDeclaration;
    getStructure(): any;
}
export const TypeParameterDeclarationBase: {
    new (): {
        [x: string]: any;
        getModifiers(): any;
        getFirstModifierByKindOrThrow(kind: any, message: any): any;
        getFirstModifierByKind(kind: any): any;
        hasModifier(textOrKind: any): any;
        toggleModifier(text: any, value: any): any;
        addModifier(text: any): any;
        removeModifier(text: any): boolean;
        getCompilerModifiers(): any;
    };
    [x: string]: any;
};
export var TypeParameterVariance: any;
export function TypeParameteredNode(Base: any): {
    new (): {
        [x: string]: any;
        getTypeParameter(nameOrFindFunction: any): any;
        getTypeParameterOrThrow(nameOrFindFunction: any): any;
        getTypeParameters(): any;
        addTypeParameter(structure: any): any;
        addTypeParameters(structures: any): any[];
        insertTypeParameter(index: any, structure: any): any;
        insertTypeParameters(index: any, structures: any): any[];
        set(structure: any): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class TypePredicateNode extends TypeNode {
    getParameterNameNode(): any;
    hasAssertsModifier(): boolean;
    getAssertsModifier(): any;
    getAssertsModifierOrThrow(message: any): any;
    getTypeNode(): any;
    getTypeNodeOrThrow(message: any): any;
}
export class TypeQueryNode extends NodeWithTypeArguments {
    getExprName(): any;
}
export class TypeReferenceNode extends NodeWithTypeArguments {
    getTypeName(): any;
}
export function TypedNode(Base: any): {
    new (): {
        [x: string]: any;
        getTypeNode(): any;
        getTypeNodeOrThrow(message: any): any;
        setType(textOrWriterFunction: any): any;
        set(structure: any): any;
        removeType(): any;
        getStructure(): any;
    };
    [x: string]: any;
};
export class UnaryExpression extends Expression {
}
export function UnaryExpressionedNode(Base: any): {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class UnionTypeNode extends TypeNode {
    getTypeNodes(): any;
}
export function UnwrappableNode(Base: any): {
    new (): {
        [x: string]: any;
        unwrap(): void;
    };
    [x: string]: any;
};
export class UpdateExpression extends UnaryExpression {
}
declare const VariableDeclaration_base: {
    new (): {
        [x: string]: any;
        hasExportKeyword(): boolean;
        getExportKeyword(): any;
        getExportKeywordOrThrow(message: any): any;
        hasDefaultKeyword(): boolean;
        getDefaultKeyword(): any;
        getDefaultKeywordOrThrow(message: any): any;
        isExported(): any;
        isDefaultExport(): boolean;
        isNamedExport(): any;
    };
    [x: string]: any;
};
export class VariableDeclaration extends VariableDeclaration_base {
    remove(): void;
    getVariableStatementOrThrow(message: any): any;
    getVariableStatement(): any;
    set(structure: any): VariableDeclaration;
    getStructure(): any;
}
export const VariableDeclarationBase: {
    new (): {
        [x: string]: any;
        hasExportKeyword(): boolean;
        getExportKeyword(): any;
        getExportKeywordOrThrow(message: any): any;
        hasDefaultKeyword(): boolean;
        getDefaultKeyword(): any;
        getDefaultKeywordOrThrow(message: any): any;
        isExported(): any;
        isDefaultExport(): boolean;
        isNamedExport(): any;
    };
    [x: string]: any;
};
export var VariableDeclarationKind: any;
declare const VariableDeclarationList_base: {
    new (): {
        [x: string]: any;
        getModifiers(): any;
        getFirstModifierByKindOrThrow(kind: any, message: any): any;
        getFirstModifierByKind(kind: any): any;
        hasModifier(textOrKind: any): any;
        toggleModifier(text: any, value: any): any;
        addModifier(text: any): any;
        removeModifier(text: any): boolean;
        getCompilerModifiers(): any;
    };
    [x: string]: any;
};
export class VariableDeclarationList extends VariableDeclarationList_base {
    getDeclarations(): any;
    getDeclarationKind(): any;
    getDeclarationKindKeyword(): any;
    setDeclarationKind(type: any): VariableDeclarationList;
    addDeclaration(structure: any): any;
    addDeclarations(structures: any): any[];
    insertDeclaration(index: any, structure: any): any;
    insertDeclarations(index: any, structures: any): any[];
}
export const VariableDeclarationListBase: {
    new (): {
        [x: string]: any;
        getModifiers(): any;
        getFirstModifierByKindOrThrow(kind: any, message: any): any;
        getFirstModifierByKind(kind: any): any;
        hasModifier(textOrKind: any): any;
        toggleModifier(text: any, value: any): any;
        addModifier(text: any): any;
        removeModifier(text: any): boolean;
        getCompilerModifiers(): any;
    };
    [x: string]: any;
};
declare const VariableStatement_base: {
    new (): {
        [x: string]: any;
        getParentModuleOrThrow(message: any): any;
        getParentModule(): any;
    };
    [x: string]: any;
};
export class VariableStatement extends VariableStatement_base {
    getDeclarationList(): any;
    getDeclarations(): any;
    getDeclarationKind(): any;
    getDeclarationKindKeyword(): any;
    setDeclarationKind(type: any): any;
    addDeclaration(structure: any): any;
    addDeclarations(structures: any): any;
    insertDeclaration(index: any, structure: any): any;
    insertDeclarations(index: any, structures: any): any;
    set(structure: any): VariableStatement;
    getStructure(): any;
}
export const VariableStatementBase: {
    new (): {
        [x: string]: any;
        getParentModuleOrThrow(message: any): any;
        getParentModule(): any;
    };
    [x: string]: any;
};
declare const VoidExpression_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class VoidExpression extends VoidExpression_base {
}
export const VoidExpressionBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
declare const WhileStatement_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class WhileStatement extends WhileStatement_base {
}
export const WhileStatementBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
declare const WithStatement_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class WithStatement extends WithStatement_base {
    getStatement(): any;
}
export const WithStatementBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
        setExpression(textOrWriterFunction: any): any;
        set(structure: any): any;
    };
    [x: string]: any;
};
export class Writers {
    static object(obj: any): (writer: any) => void;
    static objectType(structure: any): (writer: any) => void;
    static unionType(firstType: any, secondType: any, ...additionalTypes: any[]): (writer: any) => void;
    static intersectionType(firstType: any, secondType: any, ...additionalTypes: any[]): (writer: any) => void;
    static assertion(type: any, assertionType: any): (writer: any) => void;
    static returnStatement(value: any): (writer: any) => void;
}
declare const YieldExpression_base: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionOrThrow(message: any): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
    };
    [x: string]: any;
};
export class YieldExpression extends YieldExpression_base {
}
export const YieldExpressionBase: {
    new (): {
        [x: string]: any;
        getExpression(): any;
        getExpressionOrThrow(message: any): any;
        getExpressionIfKind(kind: any): any;
        getExpressionIfKindOrThrow(kind: any, message: any): any;
    };
    [x: string]: any;
};
export function createWrappedNode(node: any, opts?: {}): any;
export function forEachStructureChild(structure: any, callback: any): any;
export function getCompilerOptionsFromTsConfig(filePath: any, options?: {}): {
    options: ts.CompilerOptions;
    errors: Diagnostic[];
};
export function getScopeForNode(node: any): any;
export function insertOverloads(opts: any): any[];
export function printNode(node: any, sourceFileOrOptions: any, secondOverloadOptions: any): string;
export function setScopeForNode(node: any, scope: any): void;
import { errors } from './common/mod.js';
import { ts } from './common/mod.js';
import { SettingsContainer } from './common/mod.js';
declare class ProjectContext {
    constructor(params: any);
    get project(): any;
    logger: ConsoleLogger;
    manipulationSettings: ManipulationSettingsContainer;
    _project: any;
    fileSystemWrapper: any;
    _compilerOptions: any;
    compilerFactory: CompilerFactory;
    inProjectCoordinator: InProjectCoordinator;
    structurePrinterFactory: StructurePrinterFactory;
    lazyReferenceCoordinator: LazyReferenceCoordinator;
    directoryCoordinator: DirectoryCoordinator;
    _languageService: LanguageService | undefined;
    _customTypeChecker: TypeChecker | undefined;
    get compilerOptions(): any;
    get languageService(): LanguageService;
    get program(): Program;
    get typeChecker(): TypeChecker;
    hasLanguageService(): boolean;
    getEncoding(): any;
    getFormatCodeSettings(): {
        insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: any;
    };
    getUserPreferences(): {
        quotePreference: string;
        providePrefixAndSuffixTextForRename: any;
    };
    resetProgram(): void;
    createWriter(): CodeBlockWriter;
    getPreEmitDiagnostics(sourceFile: any): Diagnostic[];
    getSourceFileContainer(): {
        addOrGetSourceFileFromFilePath: (filePath: any, opts: any) => Promise<any>;
        addOrGetSourceFileFromFilePathSync: (filePath: any, opts: any) => any;
        containsDirectoryAtPath: (dirPath: any) => boolean;
        containsSourceFileAtPath: (filePath: any) => boolean;
        getSourceFileFromCacheFromFilePath: (filePath: any) => any;
        getSourceFilePaths: () => IterableIterator<any>;
        getSourceFileVersion: (sourceFile: any) => string;
        getChildDirectoriesOfDirectory: (dirPath: any) => any[];
    };
    getModuleResolutionHost(): ts.ModuleResolutionHost;
    getToolRequiredError(name: any): errors.InvalidOperationError;
}
import CodeBlockWriter from '../code_block_writer@11.0.3/mod.js';
import { EventContainer } from './common/mod.js';
declare class SourceFileReferenceContainer {
    constructor(sourceFile: any);
    sourceFile: any;
    nodesInThis: KeyValueCache<any, any>;
    nodesInOther: KeyValueCache<any, any>;
    unresolvedLiterals: any[];
    resolveUnresolved: () => void;
    getDependentSourceFiles(): IterableIterator<any>;
    getLiteralsReferencingOtherSourceFilesEntries(): IterableIterator<[any, any]>;
    getReferencingLiteralsInOtherSourceFiles(): IterableIterator<any>;
    refresh(): void;
    clear(): void;
    populateReferences(): void;
    getSourceFileForLiteral(literal: any): any;
    addNodeInThis(literal: any, sourceFile: any): void;
}
declare class ConsoleLogger extends EnableableLogger {
    logInternal(text: any): void;
    warnInternal(text: any): void;
}
declare class CompilerFactory {
    constructor(context: any);
    context: any;
    sourceFileCacheByFilePath: Map<any, any>;
    diagnosticCache: WeakCache<object, any>;
    definitionInfoCache: WeakCache<object, any>;
    documentSpanCache: WeakCache<object, any>;
    diagnosticMessageChainCache: WeakCache<object, any>;
    jsDocTagInfoCache: WeakCache<object, any>;
    signatureCache: WeakCache<object, any>;
    symbolCache: WeakCache<object, any>;
    symbolDisplayPartCache: WeakCache<object, any>;
    referencedSymbolEntryCache: WeakCache<object, any>;
    referencedSymbolCache: WeakCache<object, any>;
    referencedSymbolDefinitionInfoCache: WeakCache<object, any>;
    typeCache: WeakCache<object, any>;
    typeParameterCache: WeakCache<object, any>;
    nodeCache: ForgetfulNodeCache;
    sourceFileAddedEventContainer: EventContainer<undefined>;
    sourceFileRemovedEventContainer: EventContainer<undefined>;
    documentRegistry: DocumentRegistry;
    directoryCache: DirectoryCache;
    getSourceFilesByDirectoryDepth(): Generator<any, void, any>;
    getSourceFilePaths(): IterableIterator<any>;
    getChildDirectoriesOfDirectory(dirPath: any): Generator<any, void, unknown>;
    getChildSourceFilesOfDirectory(dirPath: any): Generator<any, void, unknown>;
    onSourceFileAdded(subscription: any, subscribe?: boolean): void;
    onSourceFileRemoved(subscription: any): void;
    createSourceFile(filePath: any, sourceFileText: any, options: any): any;
    createSourceFileFromText(filePath: any, sourceText: any, options: any): any;
    throwIfFileExists(filePath: any, prefixMessage: any): void;
    createOrOverwriteSourceFileFromText(filePath: any, sourceText: any, options: any): any;
    getSourceFileFromCacheFromFilePath(filePath: any): any;
    addOrGetSourceFileFromFilePath(filePath: any, options: any): any;
    containsSourceFileAtPath(filePath: any): boolean;
    containsDirectoryAtPath(dirPath: any): boolean;
    getSourceFileForNode(compilerNode: any): any;
    hasCompilerNode(compilerNode: any): boolean;
    getExistingNodeFromCompilerNode(compilerNode: any): any;
    getNodeFromCompilerNode(compilerNode: any, sourceFile: any): any;
    createSourceFileFromTextInternal(filePath: any, text: any, options: any): any;
    createCompilerSourceFileFromText(filePath: any, text: any, scriptKind: any): ts.SourceFile;
    getSourceFile(compilerSourceFile: any, options: any): any;
    addSourceFileToCache(sourceFile: any): void;
    getDirectoryFromPath(dirPath: any, options: any): any;
    createDirectoryOrAddIfExists(dirPath: any, options: any): any;
    getDirectoryFromCache(dirPath: any): any;
    getDirectoryFromCacheOnlyIfInCache(dirPath: any): any;
    getDirectoriesByDepth(): Generator<any, void, unknown>;
    getOrphanDirectories(): IterableIterator<any>;
    getSymbolDisplayPart(compilerObject: any): SymbolDisplayPart;
    getType(type: any): Type;
    getTypeParameter(typeParameter: any): TypeParameter;
    getSignature(signature: any): Signature;
    getSymbol(symbol: any): Symbol;
    getDefinitionInfo(compilerObject: any): DefinitionInfo;
    getDocumentSpan(compilerObject: any): DocumentSpan;
    getReferencedSymbolEntry(compilerObject: any): ReferencedSymbolEntry;
    getReferencedSymbol(compilerObject: any): ReferencedSymbol;
    getReferencedSymbolDefinitionInfo(compilerObject: any): ReferencedSymbolDefinitionInfo;
    getDiagnostic(diagnostic: any): Diagnostic;
    getDiagnosticWithLocation(diagnostic: any): DiagnosticWithLocation;
    getDiagnosticMessageChain(compilerObject: any): DiagnosticMessageChain;
    getJSDocTagInfo(jsDocTagInfo: any): JSDocTagInfo;
    replaceCompilerNode(oldNode: any, newNode: any): void;
    removeNodeFromCache(node: any): void;
    removeCompilerNodeFromCache(compilerNode: any): void;
    addDirectoryToCache(directory: any): void;
    removeDirectoryFromCache(dirPath: any): void;
    forgetNodesCreatedInBlock(block: any): any;
}
declare class InProjectCoordinator {
    constructor(compilerFactory: any);
    compilerFactory: any;
    notInProjectFiles: Set<any>;
    setSourceFileNotInProject(sourceFile: any): void;
    markSourceFileAsInProject(sourceFile: any): void;
    markSourceFilesAsInProjectForResolution(): {
        changedSourceFiles: any[];
        unchangedSourceFiles: any[];
    };
    _internalMarkSourceFileAsInProject(sourceFile: any): void;
    isSourceFileInProject(sourceFile: any): boolean;
    setDirectoryAndFilesAsNotInProjectForTesting(directory: any): void;
    markDirectoryAsInProject(directory: any): void;
    isDirectoryInProject(directory: any): boolean;
}
declare class StructurePrinterFactory {
    constructor(_getFormatCodeSettings: any);
    _getFormatCodeSettings: any;
    getFormatCodeSettings(): any;
    forInitializerExpressionableNode(): InitializerExpressionableNodeStructurePrinter;
    forModifierableNode(): ModifierableNodeStructurePrinter;
    forReturnTypedNode(alwaysWrite: any): ReturnTypedNodeStructurePrinter;
    forTypedNode(separator: any, alwaysWrite: any): TypedNodeStructurePrinter;
    forClassDeclaration(options: any): ClassDeclarationStructurePrinter;
    forClassMember(options: any): ClassMemberStructurePrinter;
    forClassStaticBlockDeclaration(): ClassStaticBlockDeclarationStructurePrinter;
    forConstructorDeclaration(options: any): ConstructorDeclarationStructurePrinter;
    forGetAccessorDeclaration(options: any): GetAccessorDeclarationStructurePrinter;
    forMethodDeclaration(options: any): MethodDeclarationStructurePrinter;
    forPropertyDeclaration(): PropertyDeclarationStructurePrinter;
    forSetAccessorDeclaration(options: any): SetAccessorDeclarationStructurePrinter;
    forDecorator(): DecoratorStructurePrinter;
    forJSDoc(): JSDocStructurePrinter;
    forJSDocTag(options: any): JSDocTagStructurePrinter;
    forEnumDeclaration(): EnumDeclarationStructurePrinter;
    forEnumMember(): EnumMemberStructurePrinter;
    forObjectLiteralExpressionProperty(): ObjectLiteralExpressionPropertyStructurePrinter;
    forPropertyAssignment(): PropertyAssignmentStructurePrinter;
    forShorthandPropertyAssignment(): ShorthandPropertyAssignmentStructurePrinter;
    forSpreadAssignment(): SpreadAssignmentStructurePrinter;
    forFunctionDeclaration(options: any): FunctionDeclarationStructurePrinter;
    forParameterDeclaration(): ParameterDeclarationStructurePrinter;
    forCallSignatureDeclaration(): CallSignatureDeclarationStructurePrinter;
    forConstructSignatureDeclaration(): ConstructSignatureDeclarationStructurePrinter;
    forIndexSignatureDeclaration(): IndexSignatureDeclarationStructurePrinter;
    forInterfaceDeclaration(): InterfaceDeclarationStructurePrinter;
    forMethodSignature(): MethodSignatureStructurePrinter;
    forPropertySignature(): PropertySignatureStructurePrinter;
    forTypeElementMemberedNode(): TypeElementMemberedNodeStructurePrinter;
    forTypeElementMember(): TypeElementMemberStructurePrinter;
    forJsxAttributeDecider(): JsxAttributeDeciderStructurePrinter;
    forJsxAttribute(): JsxAttributeStructurePrinter;
    forJsxChildDecider(): JsxChildDeciderStructurePrinter;
    forJsxElement(): JsxElementStructurePrinter;
    forJsxSelfClosingElement(): JsxSelfClosingElementStructurePrinter;
    forJsxSpreadAttribute(): JsxSpreadAttributeStructurePrinter;
    forAssertEntry(): AssertEntryStructurePrinter;
    forExportAssignment(): ExportAssignmentStructurePrinter;
    forExportDeclaration(): ExportDeclarationStructurePrinter;
    forImportDeclaration(): ImportDeclarationStructurePrinter;
    forModuleDeclaration(options: any): ModuleDeclarationStructurePrinter;
    forNamedImportExportSpecifier(): NamedImportExportSpecifierStructurePrinter;
    forSourceFile(options: any): SourceFileStructurePrinter;
    forStatementedNode(options: any): StatementedNodeStructurePrinter;
    forStatement(options: any): StatementStructurePrinter;
    forVariableStatement(): VariableStatementStructurePrinter;
    forTypeAliasDeclaration(): TypeAliasDeclarationStructurePrinter;
    forTypeParameterDeclaration(): TypeParameterDeclarationStructurePrinter;
    forVariableDeclaration(): VariableDeclarationStructurePrinter;
}
declare class LazyReferenceCoordinator {
    constructor(factory: any);
    dirtySourceFiles: Set<any>;
    refreshDirtySourceFiles(): void;
    refreshSourceFileIfDirty(sourceFile: any): void;
    addDirtySourceFile(sourceFile: any): void;
    clearDirtySourceFiles(): void;
    clearDirtyForSourceFile(sourceFile: any): void;
}
declare class DirectoryCoordinator {
    constructor(compilerFactory: any, fileSystemWrapper: any);
    compilerFactory: any;
    fileSystemWrapper: any;
    addDirectoryAtPathIfExists(dirPath: any, options: any): any;
    addDirectoryAtPath(dirPath: any, options: any): any;
    createDirectoryOrAddIfExists(dirPath: any, options: any): any;
    addSourceFileAtPathIfExists(filePath: any, options: any): any;
    addSourceFileAtPath(filePath: any, options: any): any;
    addSourceFilesAtPaths(fileGlobs: any, options: any): any[];
}
import { KeyValueCache } from './common/mod.js';
declare class EnableableLogger {
    enabled: boolean;
    setEnabled(enabled: any): void;
    log(text: any): void;
    warn(text: any): void;
}
import { WeakCache } from './common/mod.js';
declare class ForgetfulNodeCache extends KeyValueCache<any, any> {
    constructor(...args: any[]);
    forgetStack: any[];
    getOrCreate(key: any, createFunc: any): any;
    setForgetPoint(): void;
    forgetLastPoint(): void;
    rememberNode(node: any): boolean;
    rememberParentOfNode(node: any): void;
    forgetNodes(nodes: any): void;
}
import { DocumentRegistry } from './common/mod.js';
declare class DirectoryCache {
    constructor(context: any);
    context: any;
    directoriesByPath: KeyValueCache<any, any>;
    sourceFilesByDirPath: KeyValueCache<any, any>;
    directoriesByDirPath: KeyValueCache<any, any>;
    orphanDirs: KeyValueCache<any, any>;
    has(dirPath: any): boolean;
    get(dirPath: any): any;
    getOrphans(): IterableIterator<any>;
    getAll(): any[];
    getAllByDepth(): Generator<any, void, unknown>;
    remove(dirPath: any): void;
    getChildDirectoriesOfDirectory(dirPath: any): Generator<any, void, unknown>;
    getChildSourceFilesOfDirectory(dirPath: any): Generator<any, void, unknown>;
    addSourceFile(sourceFile: any): void;
    removeSourceFile(filePath: any): void;
    createOrAddIfExists(dirPath: any): any;
    createDirectory(path: any): Directory;
    addDirectory(directory: any): void;
    addToDirectoriesByDirPath(directory: any): void;
    removeFromDirectoriesByDirPath(dirPath: any): void;
    fillParentsOfDirPath(dirPath: any): void;
}
declare class InitializerExpressionableNodeStructurePrinter extends Printer {
    printText(writer: any, structure: any): void;
}
declare class ModifierableNodeStructurePrinter extends Printer {
    printText(writer: any, structure: any): void;
}
declare class ReturnTypedNodeStructurePrinter extends Printer {
    constructor(alwaysWrite?: boolean);
    alwaysWrite: boolean;
    printText(writer: any, structure: any): void;
}
declare class TypedNodeStructurePrinter extends Printer {
    constructor(separator: any, alwaysWrite?: boolean);
    separator: any;
    alwaysWrite: boolean;
    printText(writer: any, structure: any): void;
}
declare class ClassDeclarationStructurePrinter extends NodePrinter {
    constructor(factory: any, options: any);
    options: any;
    multipleWriter: BlankLineFormattingStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
    printHeader(writer: any, structure: any): void;
    printCtors(writer: any, structure: any, isAmbient: any): void;
    printGetAndSet(writer: any, structure: any, isAmbient: any): void;
    conditionalSeparator(writer: any, isAmbient: any): void;
}
declare class ClassMemberStructurePrinter extends Printer {
    constructor(factory: any, options: any);
    factory: any;
    options: any;
    printTexts(writer: any, members: any): void;
    printText(writer: any, member: any): void;
}
declare class ClassStaticBlockDeclarationStructurePrinter extends NodePrinter {
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class ConstructorDeclarationStructurePrinter extends NodePrinter {
    constructor(factory: any, options: any);
    options: any;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
    printOverloads(writer: any, structures: any): void;
    printOverload(writer: any, structure: any): void;
    printHeader(writer: any, structure: any): void;
}
declare class GetAccessorDeclarationStructurePrinter extends NodePrinter {
    constructor(factory: any, options: any);
    options: any;
    blankLineWriter: BlankLineFormattingStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class MethodDeclarationStructurePrinter extends NodePrinter {
    constructor(factory: any, options: any);
    options: any;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
    printOverloads(writer: any, name: any, structures: any): void;
    printOverload(writer: any, name: any, structure: any): void;
    printHeader(writer: any, name: any, structure: any): void;
}
declare class PropertyDeclarationStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: NewLineFormattingStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class SetAccessorDeclarationStructurePrinter extends NodePrinter {
    constructor(factory: any, options: any);
    options: any;
    multipleWriter: BlankLineFormattingStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class DecoratorStructurePrinter extends NodePrinter {
    printTexts(writer: any, structures: any): void;
    printTextsInline(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
    printTypeArguments(writer: any, structure: any): void;
    printArguments(writer: any, structure: any): void;
    printMultiple(writer: any, structures: any, separator: any): void;
}
declare class JSDocStructurePrinter extends NodePrinter {
    printDocs(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class JSDocTagStructurePrinter extends NodePrinter {
    constructor(factory: any, options: any);
    options: any;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class EnumDeclarationStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: BlankLineFormattingStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class EnumMemberStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: CommaNewLineSeparatedStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class ObjectLiteralExpressionPropertyStructurePrinter extends Printer {
    constructor(factory: any);
    factory: any;
    multipleWriter: CommaNewLineSeparatedStructuresPrinter;
    options: {
        isAmbient: boolean;
    };
    printTexts(writer: any, members: any): void;
    printText(writer: any, member: any): void;
}
declare class PropertyAssignmentStructurePrinter extends NodePrinter {
    printTextInternal(writer: any, structure: any): void;
}
declare class ShorthandPropertyAssignmentStructurePrinter extends NodePrinter {
    printTextInternal(writer: any, structure: any): void;
}
declare class SpreadAssignmentStructurePrinter extends NodePrinter {
    printTextInternal(writer: any, structure: any): void;
}
declare class FunctionDeclarationStructurePrinter extends NodePrinter {
    constructor(factory: any, options: any);
    options: any;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
    printOverloads(writer: any, name: any, structures: any): void;
    printOverload(writer: any, name: any, structure: any): void;
    printHeader(writer: any, name: any, structure: any): void;
}
declare class ParameterDeclarationStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: CommaSeparatedStructuresPrinter;
    printTextsWithParenthesis(writer: any, structures: any): void;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class CallSignatureDeclarationStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: NewLineFormattingStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class ConstructSignatureDeclarationStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: NewLineFormattingStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class IndexSignatureDeclarationStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: NewLineFormattingStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class InterfaceDeclarationStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: BlankLineFormattingStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class MethodSignatureStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: NewLineFormattingStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class PropertySignatureStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: NewLineFormattingStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class TypeElementMemberedNodeStructurePrinter extends Printer {
    constructor(factory: any);
    factory: any;
    printText(writer: any, structure: any): void;
    conditionalSeparator(writer: any, structures: any): void;
}
declare class TypeElementMemberStructurePrinter extends Printer {
    constructor(factory: any);
    factory: any;
    printTexts(writer: any, members: any): void;
    printText(writer: any, members: any): void;
}
declare class JsxAttributeDeciderStructurePrinter extends NodePrinter {
    printTextInternal(writer: any, structure: any): void;
}
declare class JsxAttributeStructurePrinter extends NodePrinter {
    printTextInternal(writer: any, structure: any): void;
}
declare class JsxChildDeciderStructurePrinter extends NodePrinter {
    printTextInternal(writer: any, structure: any): void;
}
declare class JsxElementStructurePrinter extends NodePrinter {
    printTextInternal(writer: any, structure: any): void;
    printAttributes(writer: any, attributes: any): void;
    printChildren(writer: any, children: any): void;
}
declare class JsxSelfClosingElementStructurePrinter extends NodePrinter {
    printTextInternal(writer: any, structure: any): void;
    printAttributes(writer: any, attributes: any): void;
}
declare class JsxSpreadAttributeStructurePrinter extends NodePrinter {
    printTextInternal(writer: any, structure: any): void;
}
declare class AssertEntryStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: CommaNewLineSeparatedStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printAssertClause(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class ExportAssignmentStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: NewLineFormattingStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class ExportDeclarationStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: NewLineFormattingStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class ImportDeclarationStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: NewLineFormattingStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class ModuleDeclarationStructurePrinter extends NodePrinter {
    constructor(factory: any, options: any);
    options: any;
    blankLineFormattingWriter: BlankLineFormattingStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
    validateAndGetStructure(structure: any): any;
}
declare class NamedImportExportSpecifierStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: CommaSeparatedStructuresPrinter;
    printTextsWithBraces(writer: any, structures: any): void;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class SourceFileStructurePrinter extends NodePrinter {
    constructor(factory: any, options: any);
    options: any;
    printTextInternal(writer: any, structure: any): void;
}
declare class StatementedNodeStructurePrinter extends Printer {
    constructor(factory: any, options: any);
    factory: any;
    options: any;
    printText(writer: any, structure: any): void;
}
declare class StatementStructurePrinter extends Printer {
    constructor(factory: any, options: any);
    factory: any;
    options: any;
    printTexts(writer: any, statements: any): void;
    printText(writer: any, statement: any): void;
}
declare class VariableStatementStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: NewLineFormattingStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class TypeAliasDeclarationStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: NewLineFormattingStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class TypeParameterDeclarationStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: CommaSeparatedStructuresPrinter;
    printTextsWithBrackets(writer: any, structures: any): void;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class VariableDeclarationStructurePrinter extends NodePrinter {
    constructor(...args: any[]);
    multipleWriter: CommaSeparatedStructuresPrinter;
    printTexts(writer: any, structures: any): void;
    printTextInternal(writer: any, structure: any): void;
}
declare class Printer {
    printTextOrWriterFunc(writer: any, textOrWriterFunc: any): void;
    getNewWriter(writer: any): CodeBlockWriter;
    getNewWriterWithQueuedChildIndentation(writer: any): CodeBlockWriter;
    getText(writer: any, textOrWriterFunc: any): string;
    getTextWithQueuedChildIndentation(writer: any, textOrWriterFunc: any): string;
}
declare class NodePrinter extends Printer {
    constructor(factory: any);
    factory: any;
    printTextWithoutTrivia(writer: any, structure: any): void;
    printText(writer: any, structure: any): void;
    printLeadingTrivia(writer: any, structure: any): void;
    printTrailingTrivia(writer: any, structure: any): void;
    printTrivia(writer: any, trivia: any): void;
}
declare class BlankLineFormattingStructuresPrinter extends Printer {
    constructor(printer: any);
    printer: any;
    printText(writer: any, structures: any): void;
}
declare class NewLineFormattingStructuresPrinter extends Printer {
    constructor(printer: any);
    printer: any;
    printText(writer: any, structures: any): void;
}
declare class CommaNewLineSeparatedStructuresPrinter extends Printer {
    constructor(printer: any);
    printer: any;
    printText(writer: any, structures: any): void;
}
declare class CommaSeparatedStructuresPrinter extends Printer {
    constructor(printer: any);
    printer: any;
    printText(writer: any, structures: any): void;
}
export { CompilerOptionsContainer, DiagnosticCategory, EmitHint, InMemoryFileSystemHost, LanguageVariant, ModuleKind, ModuleResolutionKind, NewLineKind, NodeFlags, ObjectFlags, ResolutionHosts, ScriptKind, ScriptTarget, SettingsContainer, SymbolFlags, SyntaxKind, TypeFlags, TypeFormatFlags, ts } from "./common/mod.js";

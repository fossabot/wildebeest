/**
 *
 * ## Wildebeest Mixing Type Definitions
 * Type definitions used to define the type for dynamically injected sequelize prototypes
 *
 * @module wildbeest/types
 * @see module:migrations
 */

// external modules
import {
  BelongsToCreateAssociationMixin,
  BelongsToGetAssociationMixin,
  BelongsToManyAddAssociationMixin as SequelizeBelongsToManyAddAssociationMixin,
  BelongsToManyAddAssociationsMixin as SequelizeBelongsToManyAddAssociationsMixin,
  BelongsToManyCountAssociationsMixin,
  BelongsToManyCreateAssociationMixin,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyHasAssociationMixin as SequelizeBelongsToManyHasAssociationMixin,
  BelongsToSetAssociationMixin as SequelizeBelongsToSetAssociationMixin,
  CreateOptions,
  DestroyOptions,
  FindOptions,
  HasManyAddAssociationMixin as SequelizeHasManyAddAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin as SequelizeHasManyHasAssociationMixin,
  HasOneCreateAssociationMixin,
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin as SequelizeHasOneSetAssociationMixin,
  UpdateOptions,
} from 'sequelize/types';

// db
import WildebeestModel from './classes/WildebeestModel';

// local
import { ModelMap } from './types';

/**
 * Any wildebeest model
 */
export type AnyModel = WildebeestModel<ModelMap>;

// ///////////// //
// belongsToMany //
// ///////////// //

export {
  BelongsToManyCountAssociationsMixin,
  BelongsToManyCreateAssociationMixin,
  BelongsToManyGetAssociationsMixin,
};

/**
 * BelongsToManyHasAssociationMixin with primary key set by default
 */
export type BelongsToManyHasAssociationMixin<
  TModel extends AnyModel,
  TModelPrimaryKey = TModel['id']
> = SequelizeBelongsToManyHasAssociationMixin<TModel, TModelPrimaryKey>;

/**
 * BelongsToManyAddAssociationMixin with primary key set by default
 */
export type BelongsToManyAddAssociationMixin<
  TModel extends AnyModel,
  TModelPrimaryKey = TModel['id']
> = SequelizeBelongsToManyAddAssociationMixin<TModel, TModelPrimaryKey>;

/**
 * BelongsToManyAddAssociationsMixin with primary key set by default
 */
export type BelongsToManyAddAssociationsMixin<
  TModel extends AnyModel,
  TModelPrimaryKey = TModel['id']
> = SequelizeBelongsToManyAddAssociationsMixin<TModel, TModelPrimaryKey>;

// ///////// //
// belongsTo //
// ///////// //

export { BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin };

/**
 * BelongsToSetAssociationMixin with primary key set by default
 */
export type BelongsToSetAssociationMixin<
  TModel extends AnyModel,
  TPrimaryKey = TModel['id']
> = SequelizeBelongsToSetAssociationMixin<TModel, TPrimaryKey>;

/**
 * Lookup the relationship and return the cached value if already looked up
 */
export type BelongsToGetCachedAssociationMixin<TModel extends AnyModel> = (
  findOptions?: FindOptions,
) => Promise<TModel>;

/**
 * Lookup the relationship and return the cached value if already looked up
 */
export type BelongsToGetOrDefaultAssociationMixin<
  TModel extends AnyModel
> = (defaultInput?: { [attribute: string]: unknown }) => Promise<TModel>;

/**
 * Lookup a child and update it, or create a new instance when not found
 */
export type BelongsToUpdateOrCreateAssociationMixin<TModel extends AnyModel> = (
  findOptions: FindOptions,
  input: { [attribute: string]: unknown },
  options?: UpdateOptions,
) => Promise<TModel>;

// ////// //
// hasOne //
// ////// //

export { HasOneCreateAssociationMixin, HasOneGetAssociationMixin };

/**
 * HasOneSetAssociationMixin with primary key set by default
 */
export type HasOneSetAssociationMixin<
  TModel extends AnyModel,
  TModelPrimaryKey = TModel['id']
> = SequelizeHasOneSetAssociationMixin<TModel, TModelPrimaryKey>;

/**
 * Lookup the relationship and return the cached value if already looked up
 */
export type HasOneGetCachedAssociationMixin<TModel extends AnyModel> = (
  findOptions?: FindOptions,
) => Promise<TModel>;

/**
 * Lookup the relationship and return the cached value if already looked up
 */
export type HasOneGetOrDefaultAssociationMixin<
  TModel extends AnyModel
> = (defaultInput?: { [attribute: string]: unknown }) => Promise<TModel>;

/**
 * Lookup a child and update it, or create a new instance when not found
 */
export type HasOneUpdateOrCreateAssociationMixin<TModel extends AnyModel> = (
  findOptions: FindOptions,
  input: { [attribute: string]: unknown },
  options?: UpdateOptions,
) => Promise<TModel>;

// /////// //
// hasMany //
// /////// //

export {
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
};

/**
 * HasManyHasAssociationMixin with primary key set by default
 */
export type HasManyHasAssociationMixin<
  TModel extends AnyModel,
  TModelPrimaryKey = TModel['id']
> = SequelizeHasManyHasAssociationMixin<TModel, TModelPrimaryKey>;

/**
 * HasManyAddAssociationMixin with primary key set by default
 */
export type HasManyAddAssociationMixin<
  TModel extends AnyModel,
  TModelPrimaryKey = TModel['id']
> = SequelizeHasManyAddAssociationMixin<TModel, TModelPrimaryKey>;

/**
 * Bulk create a handful of models
 */
export type HasManyCreateManyAssociationsMixin<TModel extends AnyModel> = (
  inputs: { [attribute: string]: unknown }[],
  allOptions?: CreateOptions,
) => Promise<TModel[]>;

/**
 * Destroy all child instances with individual hooks
 */
export type HasManyDestroyAllAssociationMixin = (
  options?: DestroyOptions,
) => Promise<void>;

/**
 * Find a single item and destroy it, if the item does not exist throw and error
 */
export type HasManyDestroyOneAssociationMixin = (
  findOptions: FindOptions,
  options?: DestroyOptions,
) => Promise<boolean>;

/**
 * Get the first item matching options and throws error if no matches
 */
export type HasManyGetOneAssociationMixin<TModel extends AnyModel> = (
  findOptions: FindOptions,
  errorMessage?: string,
) => Promise<TModel>;

/**
 * Update all children of a model
 */
export type HasManyUpdateAllAssociationsMixin<TModel extends AnyModel> = (
  input: { [attribute: string]: unknown },
  options?: UpdateOptions,
) => Promise<TModel>;

/**
 * Find a single child instance and update it, throw an error when not found
 */
export type HasManyUpdateOneAssociationMixin<TModel extends AnyModel> = (
  findOptions: FindOptions,
  input: { [attribute: string]: unknown },
  options: UpdateOptions,
) => Promise<TModel>;

/**
 * Lookup a child and update it, or create a new instance when not found
 */
export type HasManyUpdateOrCreateAssociationMixin<TModel extends AnyModel> = (
  findOptions: FindOptions,
  input: { [attribute: string]: unknown },
  options: UpdateOptions,
) => Promise<TModel>;

/**
 *
 * ## Wildebeest Constants
 * Constants for wildebeest
 *
 * @module wildebeest/constants
 * @see module:wildebeest
 */

// external modules
import snakeCase from 'lodash/snakeCase';
import {
  BelongsToOptions,
  HasManyOptions,
  ModelIndexesOptions,
} from 'sequelize';

/**
 * One can override the naming conventions for various database values
 */
export const DEFAULT_NAMING_CONVENTIONS = {
  /**
   * An index on a column
   */
  columnIndex: (tableName: string, columnName: string): string =>
    columnName === 'id'
      ? `${tableName}_pkey`
      : `${tableName}_${columnName}_key`,
  /**
   * A foreign key constraint on a column
   */
  foreignKeyConstraint: (tableName: string, columnName: string): string =>
    `${tableName}_${columnName}_fkey`,
  /**
   * A unique constraint on a single column
   */
  uniqueConstraint: (tableName: string, columnName: string): string =>
    `${tableName}_${columnName}_key`,
  /**
   * The name of an enum
   */
  enum: (tableName: string, columnName: string): string =>
    `enum_${tableName}_${columnName}`,
  /**
   * A unique conostraint across a number of columns
   */
  fieldsConstraint: (
    tableName: string,
    fields: Required<ModelIndexesOptions>['fields'],
  ): string =>
    `${snakeCase(tableName)}_${fields
      .map((word) => snakeCase(typeof word === 'string' ? word : word.name))
      .join('_')}`,
};

/**
 * Add hooks: true onDelete: cascade
 */
export const CASCADE_HOOKS: HasManyOptions = {
  hooks: true,
  onDelete: 'cascade',
};

/**
 * Make the foreignKey be NOT NULL
 */
export const NON_NULL: BelongsToOptions = { foreignKey: { allowNull: false } };

/**
 * The maximum number of migrations to show on a page
 */
export const MAX_MIGRATION_DISPLAY = 30;

/**
 * True if NODE_ENV=test
 */
export const IS_TEST = process.env.NODE_ENV === 'test';

/**
 * One second of time in ms
 */
export const ONE_SECOND = 1000;

/**
 * One minute of time in ms
 */
export const ONE_MINUTE = 60 * ONE_SECOND;

/**
 * The maximum number of times to attempt to acquire the migration lock.
 */
export const MAX_LOCK_ATTEMPTS = 20;

/**
 * The maximum random timeout that should occur between attempts to acquire the migration lock
 */
export const MIGRATION_TIMEOUT = ONE_SECOND * 5;
